import React, { useEffect, useState } from 'react'
import { useSupabase } from '../../Providers/SupabaseProvider'
import styles from './order.module.scss'
import { OrderTopSection } from './OrderTopSection';
import { useForm } from "react-hook-form"

export const OrderContainer = () => {
    const [container, setContainer] = useState([]);
    const { supabase } = useSupabase();
    const { register, handleSubmit,formState: { errors },} = useForm()
  
    const getContainers = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("containers")
                .select("id, name, icon_svg");
            if (error) {
                console.error("Error Loading Containers");
            } else {
                setContainer(data);
            }
        }
    };

    const onSubmit = async (data) => {
        if (supabase) {
          try {
            // Inserting data into the "reviews" table
            const { data: supabaseData, error } = await supabase
              .from("orders")
              .insert([
                {
                  id: data.id,
                  container_id: data.container_id, // Ensure `site_id` is part of your form data
                  fullname: data.fullname, // Ensure `user_id` is part of your form data
                  adress: data.adress, // You can generate the timestamp here
                  zipcode: data.zipcode,
                  city: data.city,
                  email: data.email,
                  phone: data.phone,
                  created_at: data.created_at
                }
              ]);
    
            if (error) {
              console.error("Error ordering container", error);
            } else {
              console.log("Message sent successfully", supabaseData);
            }
          } catch (error) {
            console.error("Unexpected error", error);
          }
        }
      };
  
    useEffect(() => {
        getContainers();
    }, [supabase]);
  return (
    <div className={styles.contentWrapper}>
        <OrderTopSection />
    <div className={styles.orderWrapper}>
    {container &&
        container.map((item) => (
            <>
            <div  key={item.id} className={styles.containerWrapper}>
                <section className={styles.boxWrapper}>
                <div>
                <p>{item.name}</p>
                <div dangerouslySetInnerHTML={{ __html: item.icon_svg }}alt="ikke loade" />
                </div>
                </section>
            </div>
             </>
        ))
    }
    </div>
    </div>
  )
}