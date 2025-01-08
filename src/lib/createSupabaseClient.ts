import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config() 

const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_ANON_KEY;

console.log('Supabase URL:', supabaseUrl)  // Verifica que esté cargado
console.log('Supabase Anon Key:', supabaseAnonKey)  // Verifica que esté cargado

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL or Anon Key is missing in the environment variables')
  }

export const supabase = createClient(supabaseUrl, supabaseAnonKey)