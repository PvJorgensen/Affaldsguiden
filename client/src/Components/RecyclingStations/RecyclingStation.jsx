import React, { useEffect, useState } from 'react';
import { useSupabase } from '../../Providers/SupabaseProvider';
import styles from './station.module.scss';
import maptest from '../../assets/maptest.png';

// Star Rating Component
const StarRating = ({ rating }) => {
    const maxStars = 5;
    const filledStars = Math.round(rating); // Round the rating to the nearest integer
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
        if (i <= filledStars) {
            stars.push(<span key={i}>&#9733;</span>); // Filled star (★)
        } else {
            stars.push(<span key={i}>&#9734;</span>); // Empty star (☆)
        }
    }

    return <div>{stars}</div>;
};

export const RecyclingStation = () => {
    const [stations, setStations] = useState([]);
    const { supabase } = useSupabase();

    // Fetch stations
    const getStation = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("recycling_sites")
                .select("id, name, zipcode, city, country, email, phone, longitude, latitude");
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
        <div className={styles.stations}>
            {stations &&
            stations.map((item) => (
                <div key={item.id} className={styles.stationWrapper}>
                    <section className={styles.map}>
                        <img src={maptest} alt="map" />
                    </section>
                    <section className={styles.info}>
                        <h3>{item.name}</h3>
                        <p>{item.zipcode} - {item.city}</p>
                    </section>
                    <section className={styles.rating}>
                        <StarRating rating={item.averageRating} />
                    </section>
                </div>
            ))}
        </div>
    );
};
