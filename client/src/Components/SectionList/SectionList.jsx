import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";
import styles from './sectionlist.module.scss';
import { Link } from 'react-router-dom';
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";

export const SectionList = () => {
    const [sectionList, setSectionList] = useState([]);
    const { supabase } = useSupabase();
  
    const getSectionList = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("trash_sections")
                .select("id, title, description, color, image_url");
            if (error) {
                console.error("Error Loading Sections");
            } else {
                setSectionList(data);
            }
        }
    };
  
    useEffect(() => {
        getSectionList();
    }, [supabase]);
  
    return (
        <ContentWrapper title="Sorteringssguide" subtitle="Vælg en sektion">
        <div className={styles.sectionWrapper}>
            {sectionList &&
                sectionList.map((item) => (
                    <Link to={`./${item.id}`} key={item.id} className={styles.sections}>
                        <div style={{ backgroundColor: `#${item.color}` }}>
                            <h3>{item.title}</h3>
                        </div>
                        <img src={item.image_url} alt={item.title} />
                    </Link>
                ))}
        </div>
        </ContentWrapper>
    );
};
