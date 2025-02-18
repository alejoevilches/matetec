"use server"

import { supabase } from "./createSupabaseClient";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleLogout=async ()=>{
    const cookieStorage=await cookies();
    const {error}=await supabase.auth.signOut({scope: 'global'});
    if (error) throw new Error(error.message)
    cookieStorage.delete("user"); 
    redirect("/");
}