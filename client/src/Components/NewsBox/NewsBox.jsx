import React, { useEffect, useState } from 'react';
import { useSupabase } from '../../Providers/SupabaseProvider';
import styles from './newsbox.module.scss';
import backgroundImg from '../../assets/Images/Paintbuckets.png';
import arrow from '../../assets/Arrow.png'
import { NavLink } from 'react-router-dom';

export const NewsBox = () => {
  const [articles, setArticles] = useState([]);
  const { supabase } = useSupabase();

  const getData = async () => {
    if (supabase) {
      const { data, error } = await supabase
        .from("articles")
        .select("id, published_at, title, teaser, html_content, is_news, slug, image_url");

      if (error) {
        console.error("Error Loading articles", error);
      } else if (data) {
        const sortedData = data.sort(() => 0.5 - Math.random());
        setArticles(sortedData);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [supabase]);

  return (
    <>
      <section className={styles.newsboxWrapper}>
        <img src={backgroundImg} alt="Background" className={styles.backgroundImage} />
        <div className={styles.articleWrapper}>
          {articles &&
            articles.slice(0, 2).map((item) => (
              <section key={item.id} className={styles.articleSection}>
                <h3>{item.title}</h3>
                <p>{item.teaser}</p>
                <NavLink to="/Artikler"><img src={arrow} alt="" /></NavLink>
              </section>
            ))
          }
        </div>
      </section>
    </>
  );
};
