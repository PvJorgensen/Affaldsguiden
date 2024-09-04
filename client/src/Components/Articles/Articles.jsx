// import React, { useEffect, useState } from 'react'
// import styles from './article.module.scss'
// import { useSupabase } from '../../Providers/SupabaseProvider';
// import { format } from 'date-fns';

// export const Articles = () => {
//     const [article, setArticle] = useState([]);
//     const { supabase } = useSupabase();
  
//     const getArticle = async () => {
//         if (supabase) {
//             const { data, error } = await supabase
//                 .from("articles")
//                 .select("id, published_at, title, teaser, html_content, is_news, slug, image_url");
//             if (error) {
//                 console.error("Error Loading Articles");
//             } else {
//                 setArticle(data);
//             }
//         }
//     };
  
//     useEffect(() => {
//         getArticle();
//     }, [supabase]);

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return format(date, 'dd. MMMM. yyyy');
//       };

//   return (
//     <div className={styles.articleWrapper}>
//         {article &&
//             article.slice(0, 6).map((item) =>(
//                 <article key={item.id} className={styles.articles}>
//                     <div>
//                         <img src={item.image_url} alt="" />
//                     </div>
//                     <div>
//                         <div>
//                             <h3>{item.title}</h3>
//                             <p>{formatDate(item.published_at)}</p>
//                         </div>
//                     <p>{item.teaser}</p>
//                     <p>Læs mere</p>
//                     </div>
//                 </article>
//             ))
//         }
//     </div>
//   )
// }
