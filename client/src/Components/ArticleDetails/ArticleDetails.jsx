import React, { useEffect, useState } from 'react'
import styles from './articledetails.module.scss'
import { useSupabase } from '../../Providers/SupabaseProvider';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

export const ArticleDetails = () => {
    const [articledata, setArticleData] = useState({});
    const { supabase } = useSupabase();
    const { article_id } = useParams();

    const getArticleData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("articles")
                .select("id, published_at, title, teaser, html_content, is_news, slug, image_url")
                .eq('id', article_id)
                .single();
            if (error) {
                console.error("Error Loading ArticleDetails", error);
            } else {
                setArticleData(data);
            }
        }
    };

    useEffect(() => {
        getArticleData();
    }, [supabase, article_id]); // Added article_id to dependencies to refetch if it changes

    const formatDate = (dateString) => {
        if (!dateString) return 'Date not available'; // Handle undefined or null dateString
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Invalid date'; // Handle invalid date
        return format(date, 'dd. MMMM. yyyy');
    };

    return (
        <ContentWrapper>
            <div className={styles.articleWrapper}>
                <article key={articledata.id} className={styles.articleDetails}>
                    <section>
                        <h3>{articledata.title || 'No Title'}</h3>
                        <h4>{articledata.teaser || 'No Teaser'}</h4>
                        <p className={styles.date}>{formatDate(articledata.published_at)}</p>
                    </section>
                    <section>
                        <img src={articledata.image_url || 'placeholder.jpg'} alt={articledata.title || 'Image'} />
                    </section>
                    <section>
                        <p className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: articledata.html_content || '' }} />
                    </section>
                </article>
            </div>
        </ContentWrapper>
    );
}
