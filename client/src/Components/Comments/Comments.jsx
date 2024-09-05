import React from 'react';
import styles from './comments.module.scss';
import { StarRating } from '../../Utils/StarRating';
import { useForm } from "react-hook-form";
import { useSupabase } from '../../Providers/SupabaseProvider';
import { useAuth } from '../../Providers/AuthProvider';

export const Comments = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { supabase } = useSupabase();
  const { loginData } = useAuth()
  
  const onSubmit = async (data) => {
    if (supabase) {
      try {
        // Inserting data into the "reviews" table
        const { data: supabaseData, error } = await supabase
          .from("reviews")
          .insert([
            {
              comment: data.comment,
              site_id: data.site_id, // Ensure `site_id` is part of your form data
              user_id: loginData?.user?.id, // Ensure `user_id` is part of your form data
              created_at: new Date() // You can generate the timestamp here
            }
          ]);

        if (error) {
          console.error("Error sending message", error);
        } else {
          console.log("Message sent successfully", supabaseData);
        }
      } catch (error) {
        console.error("Unexpected error", error);
      }
    }
  };

  return (
    <div className={styles.commentWrapper}>
      <h2>Kommentare</h2>
      <section className={styles.topBox}>
        <p>Skriv en anmeldelse</p>
        <div>
          <StarRating />
        </div>
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.textBox}>
        <textarea {...register("comment", { required: true })} name="comment" id="comment"></textarea>
        {errors.comment && <p className={styles.error}>This field is required</p>}

        <section className={styles.BtnContainer}>
          <button type='submit'>Send</button>
        </section>
      </form>
    </div>
  );
};
