import React, { useEffect, useState } from 'react';
import { useSupabase } from '../../Providers/SupabaseProvider';
import styles from './stationdetails.module.scss';
import maptest from '../../assets/maptest.png';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { Comments } from '../Comments/Comments';
import { StarRating } from '../../Utils/StarRating';
import { GetComments } from '../GetComments/GetComments';

// Star Rating Component
export const StationDetails = () => {
    const [stations, setStations] = useState([]);
    const { supabase } = useSupabase();
    const { station_id } = useParams()
    // Fetch stations
    const getStation = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("recycling_sites")
                .select("id, name, address, zipcode, city, country, email, phone, longitude, latitude")
                .eq('id', station_id)
                .single()
            if (error) {
                console.error("Error Loading Stations");
            } else {
                setStations(data);
            }
        }
    };

    // Fetch reviews and calculate average ratings
    const getReviews = async () => {
        if (supabase) {
            const { data: reviewsData, error: reviewsError } = await supabase
                .from("reviews")
                .select("id, num_stars");

            if (reviewsError) {
                console.error("Error Loading Reviews");
            } else {
                // Combine station data with average ratings
                const stationsWithRatings = stations.map(station => {
                    const stationReviews = reviewsData.filter(review => review.station_id === station.id);
                    const totalRating = stationReviews.reduce((acc, review) => acc + review.num_stars, 0);
                    const averageRating = stationReviews.length ? totalRating / stationReviews.length : 0;
                    return { ...station, averageRating };
                });
                setStations(stationsWithRatings);
            }
        }
    };

    useEffect(() => {
        getStation();
    }, [supabase]);

    useEffect(() => {
        if (stations.length > 0) {
            getReviews();
        }
    }, [stations]);

    return (
        <ContentWrapper>
                <div className={styles.detailsWrapper}>
                    <section className={styles.mapBox}>
                        <img src={maptest} alt="map" />
                    </section>
                    <div className={styles.infoWrapper}>
                    <section>
                        <h3>{stations.name}</h3>
                        <p>{stations.address}</p>
                        <p>{stations.zipcode} {stations.city}</p>
                        <p>{stations.email}</p>
                        <p>{stations.phone}</p>
                    </section>
                    <section className={styles.ratingWrapper}>
                        <StarRating rating={stations.averageRating} />
                    </section>
                    </div>
                </div>
                <Comments />
                <GetComments />
        </ContentWrapper>
    );
};
