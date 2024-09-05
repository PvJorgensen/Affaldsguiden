import React, { useEffect, useState } from 'react'
import styles from './articlelist.module.scss'
import { useSupabase } from '../../Providers/SupabaseProvider';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper'

export const ArticleList = () => {
    const [articledata, setArticleData] = useState([]);
    const { supabase } = useSupabase();
  
    const getArticleData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("articles")
                .select("id, published_at, title, teaser, html_content, is_news, slug, image_url");
            if (error) {
                console.error("Error Loading ArticleList");
            } else {
                setArticleData(data);
            }
        }
    };
  
    useEffect(() => {
        getArticleData();
    }, [supabase]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd. MMMM. yyyy');
      };

  return (
    <ContentWrapper className={styles.articleWrapper} title="Artikler" >
        {articledata &&
            articledata.slice(0, 6).map((item) =>(
                <div className={styles.linkBox} key={item.id}>
                <article className={styles.articles}>
                    <div>
                        <img src={item.image_url} alt="" />
                    </div>
                    <div className={styles.rightSection}>
                        <div className={styles.topSection}>
                            <h3>{item.title}</h3>
                            <p>{formatDate(item.published_at)}</p>
                        </div>
                    <p>{item.teaser}</p>
                    <Link to={`./${item.id}`}  key={item.id}>
                    <p className={styles.readMore}>Læs mere</p>
                    </Link>
                    </div>
                </article>
                </div>
                
            ))
        }
    </ContentWrapper>
  )
}
