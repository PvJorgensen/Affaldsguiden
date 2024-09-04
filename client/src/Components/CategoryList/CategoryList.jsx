import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";
// import styles from './sortcat.module.scss';
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
                    <Link to={`/category/${item.id}`} key={item.id}>
                        <div style={{ backgroundColor: `#${item.color}` }}>
                            <h3>{item.title}</h3>
                        </div>
                        <img src={item.image_url} alt={item.title} />
                    </Link>
                ))}
        </ContentWrapper>
    );
};
