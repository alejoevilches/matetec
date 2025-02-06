//TODO: usar cookies en lugar de localStorage
import {createClient} from '@supabase/supabase-js'

const supabaseUrl=process.env.NEXT_SUPABASE_URL
const supabaseKey=process.env.NEXT_SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or Anon Key is missing in the environment variables')
}


export const supabase=createClient(supabaseUrl, supabaseKey)
