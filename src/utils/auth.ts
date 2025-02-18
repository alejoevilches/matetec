"use server"

import { UserRepository } from "@/lib/repositories/UserRepository";
import { supabase } from "./createSupabaseClient";
import { IUser } from "@/types/user";
import { cookies } from "next/headers";

export type TUserLogin={
  email: string,
  password: string
}

const userRepository = new UserRepository()

export async function auth({email, password}: TUserLogin){
  const {data, error}=await supabase.auth.signInWithPassword({
    email,
    password
  })

  const cookieStore=await cookies();

  if (error) throw new Error(error.message)

  const loginData: IUser = await userRepository.getUserByAuthId(data.user.id)

  cookieStore.set('name', loginData.nombre);

  return data
}