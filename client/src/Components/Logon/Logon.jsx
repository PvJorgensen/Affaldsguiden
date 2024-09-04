import React, { useState } from 'react'
import { useAuth } from '../../Providers/AuthProvider'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { useSupabase } from '../../Providers/SupabaseProvider'
import styles from './logon.module.scss'

export const Logon = () => {
  const { supabase } = useSupabase()
  const { loginData, setLoginData } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit,formState: { errors },} = useForm()

  const handleLogin = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error("error logging in:", error)
    } else {
      console.log("logged in", data)
      sessionStorage.setItem("supabase.auth.token", JSON.stringify(data))
      setLoginData(data)
      setTimeout(() => {
        navigate('/')
      }, 0)
    }
  }

  return (
    <>
      {!loginData || !loginData.user ? (
        <form onSubmit={handleSubmit(handleLogin)} className={styles.loginWrapper}>
            <section className={styles.loginBox}>
          <div>
            <h2>Login</h2>
            <input placeholder='Indtast din email' type="email" id="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div>
            <input placeholder='Indtast dit password' type="password" id="password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className={styles.loginContainer}>
            <button type="submit">LOGIN</button>
          </div>
            <div className={styles.assets}>
                <p>Opret en bruger</p>
                <p>Glemt password</p>
            </div>
          </section>
        </form>
      ) : null}
    </>
  )
}