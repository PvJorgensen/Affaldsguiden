import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";
import styles from './sortcat.module.scss';
import { Link } from 'react-router-dom';

export const SortCategory = () => {
    const [category, setCategory] = useState([]);
    const { supabase } = useSupabase();
  
    const getCategory = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("trash_sections")
                .select("id, title, description, color, image_url");
            if (error) {
                console.error("Error Loading Categories");
            } else {
                setCategory(data);
            }
        }
    };
  
    useEffect(() => {
        getCategory();
    }, [supabase]);
  
    return (
        <div className={styles.sectionWrapper}>
            {category &&
                category.map((item) => (
                    <Link to={`/category/${item.id}`} key={item.id} className={styles.sections}>
                        <div style={{ backgroundColor: `#${item.color}` }}>
                            <h3>{item.title}</h3>
                        </div>
                        <img src={item.image_url} alt={item.title} />
                    </Link>
                ))}
        </div>
    );
};
