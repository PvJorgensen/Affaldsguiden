import React, { useEffect, useState } from 'react';
import { useSupabase } from '../../Providers/SupabaseProvider';
import styles from './order.module.scss';
import { OrderTopSection } from './OrderTopSection';
import { useForm } from 'react-hook-form';

export const OrderContainer = () => {
    const [container, setContainer] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null); // State to track the active box
    const { supabase } = useSupabase();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const getContainers = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from('containers')
                .select('id, name, icon_svg');
            if (error) {
                console.error('Error Loading Containers');
            } else {
                setContainer(data);
            }
        }
    };

    const onSubmit = async (data) => {
        if (supabase) {
            try {
                const { data: supabaseData, error } = await supabase
                    .from('orders')
                    .insert([
                        {
                            id: data.id,
                            container_id: data.container_id,
                            fullname: data.fullname,
                            address: data.address,
                            zipcode: data.zipcode,
                            city: data.city,
                            email: data.email,
                            phone: data.phone,
                            created_at: data.created_at
                        }
                    ]);

                if (error) {
                    console.error('Error ordering container', error);
                } else {
                    console.log('Message sent successfully', supabaseData);
                }
            } catch (error) {
                console.error('Unexpected error', error);
            }
        }
    };

    useEffect(() => {
        getContainers();
    }, [supabase]);

    const handleContainerClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.contentWrapper}>
            <OrderTopSection />
            <div className={styles.orderWrapper}>
                {container &&
                    container.map((item, index) => (
                        <div
                            key={item.id}
                            className={`${styles.containerWrapper} ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleContainerClick(index)}
                        >
                            <section className={styles.boxWrapper}>
                                <div>
                                    <p>{item.name}</p>
                                    <div dangerouslySetInnerHTML={{ __html: item.icon_svg }} />
                                </div>
                            </section>
                        </div>
                    ))}
                <div className={styles.formWrapper}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder="Indtast dit navn"
                            {...register('fullname', { required: true })}
                        />
                        <input
                            type="text"
                            placeholder="Indtast din adresse"
                            {...register('address', { required: true })}
                        />
                        <input
                            type="text"
                            placeholder="Indtast dit postnummer"
                            {...register('zipcode', { required: true })}
                        />
                        <input
                            type="text"
                            placeholder="Indtast navn på din by"
                            {...register('city', { required: true })}
                        />
                        <input
                            type="email"
                            placeholder="Indtast din email"
                            {...register('email', { required: true })}
                        />
                        <input
                            type="text"
                            placeholder="Indtast dit telefonnummer"
                            {...register('phone', { required: true })}
                        />
                        <button type="submit">Bestil</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
