import React, { useEffect, useState } from 'react';
import styles from './articledetails.module.scss'; // Importerer CSS-moduler til styling af komponenten
import { useSupabase } from '../../Providers/SupabaseProvider'; // Henter Supabase konteksten via en custom hook
import { format } from 'date-fns'; // Importerer en funktion til formatering af datoer
import { useParams } from 'react-router-dom'; // Henter parameter fra URL, fx artikel-ID
import { ContentWrapper } from '../ContentWrapper/ContentWrapper'; // Importerer en wrapper-komponent til layout

// Definerer ArticleDetails komponenten
export const ArticleDetails = () => {
    const [articledata, setArticleData] = useState({}); // Opretter en state til at gemme artiklens data
    const { supabase } = useSupabase(); // Henter Supabase instansen fra konteksten
    const { article_id } = useParams(); // Henter article_id fra URL'ens parametre

    // Funktion til at hente artikeldata fra Supabase
    const getArticleData = async () => {
        if (supabase) { // Tjekker, om supabase er tilgængelig
            const { data, error } = await supabase
                .from("articles") // Henter data fra "articles"-tabellen
                .select("id, published_at, title, teaser, html_content, is_news, slug, image_url") // Definerer felterne, der skal hentes
                .eq('id', article_id) // Filtrerer artiklen baseret på id fra URL'en
                .single(); // Henter en enkelt artikel, da id er unikt
            if (error) {
                console.error("Error Loading ArticleDetails", error); // Logger fejl, hvis data ikke kan hentes
            } else {
                setArticleData(data); // Sætter den hentede artikeldata i state
            }
        }
    };

    // Brug useEffect til at køre getArticleData, når komponenten mountes eller når article_id eller supabase ændres
    useEffect(() => {
        getArticleData();
    }, [supabase, article_id]); // article_id tilføjes til dependencies, så der hentes ny data, hvis id ændres

    // Funktion til at formatere datoer til en læsbar form
    const formatDate = (dateString) => {
        if (!dateString) return 'Date not available'; // Håndterer tilfælde, hvor datoen mangler
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Invalid date'; // Håndterer ugyldige datoer
        return format(date, 'dd. MMMM. yyyy'); // Returnerer formateret dato
    };

    // Returnerer JSX, som definerer hvordan artikeldetaljerne vises i UI
    return (
        <ContentWrapper> {/* Wrapper-komponenten til layout */}
            <div className={styles.articleWrapper}> {/* Brug CSS-modul til styling */}
                <article key={articledata.id} className={styles.articleDetails}>
                    <section>
                        <h3>{articledata.title || 'No Title'}</h3> {/* Viser artikelens titel eller en fallback */}
                        <h4>{articledata.teaser || 'No Teaser'}</h4> {/* Viser artikelens teaser */}
                        <p className={styles.date}>{formatDate(articledata.published_at)}</p> {/* Formaterer og viser datoen */}
                    </section>
                    <section>
                        <img src={articledata.image_url || 'placeholder.jpg'} alt={articledata.title || 'Image'} /> {/* Viser billede eller en placeholder */}
                    </section>
                    <section>
                        <p className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: articledata.html_content || '' }} /> {/* Viser HTML-indholdet fra artiklen */}
                    </section>
                </article>
            </div>
        </ContentWrapper>
    );
}
