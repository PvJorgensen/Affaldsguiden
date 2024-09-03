import React, { useEffect, useState } from 'react'
import { useSupabase } from '../../Providers/SupabaseProvider';
import styles from './station.module.scss'
import maptest from '../../assets/maptest.png'

export const RecyclingStation = () => {
    const [station, setStation] = useState([]);
    const { supabase } = useSupabase();
  
    const getStation = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("recycling_sites")
                .select("id, name, zipcode, city, country, email, phone, longitude, latitude");
            if (error) {
                console.error("Error Loading Stations");
            } else {
                setStation(data);
            }
        }
    };
  
    useEffect(() => {
        getStation();
    }, [supabase]);

  return (
    <div className={styles.stations}>
        {station &&
        station.map((item) => (
            <div key={item.id} className={styles.stationWrapper}>
                <div>
                <img src={maptest} alt="map" />
                </div>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.zipcode} - {item.city}</p>
                </div>
            </div>
        ))
        }
    </div>
  )
}
