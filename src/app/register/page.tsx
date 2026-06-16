"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import styles from "./Register.module.css";

export default function RegisterPage() {
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const { data, error } =
      await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Account created. Check your email."
    );

    console.log(data);
  }

  return (
    <main className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.authTitle}>Create Account</h1>

        <form className={styles.authForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className={styles.authInput}
            value={fullName}
            onChange={(e) =>
              setFullName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            className={styles.authInput}
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

          <input
            type="password"
            placeholder="Password"
            className={styles.authInput}
            value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

          <button type="submit" className={styles.authButton}>
            Register
          </button>
        </form>
      </div>
    </main>
  );
}