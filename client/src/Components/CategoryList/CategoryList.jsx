import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";
import styles from './categorylist.module.scss';
import { Link, useParams } from 'react-router-dom';
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";

export const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [sectionDetails, setSectionDetails] = useState({});
    const { supabase } = useSupabase();
    const { section_id } = useParams()
  
    const getCategoryList = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("trash_categories")
                .select("id, title, icon_url, image_url")
                .eq('section_id', section_id)
            if (error) {
                console.error("Error Loading Categories");
            } else {
                
                setCategoryList(data);
            }
        }
    };

    const getSectionDetails = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("trash_sections")
                .select("title, color")
                .eq('id', section_id)
                .single()
            if (error) {
                console.error("Error Loading Categories");
            } else {
                
                setSectionDetails(data);
            }
        }
    };
  
    useEffect(() => {
        getCategoryList();
        getSectionDetails()
    }, [supabase, section_id]);
  
    return (
        <ContentWrapper title={sectionDetails.title} subtitle='Vælg en kategori' bgcolor={sectionDetails.color}>
            {categoryList &&
                categoryList.map((item) => (
                    <div key={item.id} className={styles.categoryList}>
                        <section className={styles.contentBox}>
                            <h3>{item.title}</h3>
                        </section>
                        <section className={styles.imgWrapper}>
                        <img src={item.image_url} alt={item.title} />
                        </section>
                    </div>
                    
                ))}
        </ContentWrapper>
    );
};
