import React, { useEffect, useState } from 'react'
import { useSupabase } from '../../Providers/SupabaseProvider';

export const GetComments = () => {
    const [comments, setComments] = useState([]);
    const { supabase } = useSupabase();

    // Fetch stations
    const getReviews = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("reviews")
                .select("id, subject, comment, num_stars, site_id, created_at");
            if (error) {
                console.error("Error Loading Reviews");
            } else {
                setComments(data);
            }
        }
    };

    useEffect(() => {
        getReviews();
    }, [supabase]);


  return (
    <div>
        {comments &&
            comments.map((item) => (
                <div key={item.id}>
                    <p>{item.comment}</p>
                </div>
            ))
        }
    </div>
  )
}
