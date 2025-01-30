import { supabase } from "./createSupabaseClient";

export type TUserLogin={
  email: string,
  password: string
}

export async function auth({email, password}: TUserLogin){
  const {data, error}=await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (!error) return data
}