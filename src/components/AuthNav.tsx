"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import LogoutButton from "./LogoutButton";

export default function AuthNav() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    getUser();
  }, []);

if (!user) {
  return (
    <div className="flex items-center gap-4">
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  );
}

  return (
    <>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>

      <li>
        <LogoutButton />
      </li>
    </>
  );
}