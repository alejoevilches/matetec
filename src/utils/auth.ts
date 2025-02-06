import { UserRepository } from "@/lib/repositories/UserRepository";
import { supabase } from "./createSupabaseClient";
import { IUser } from "@/types/user";

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

  if (error) throw new Error(error.message)

  const loginData: IUser = await userRepository.getUserByAuthId(data.user.id)

  localStorage.setItem("name", loginData.nombre)

  return data
}