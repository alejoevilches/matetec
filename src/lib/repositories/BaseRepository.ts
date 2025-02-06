import { supabase } from "@/utils/createSupabaseClient"; 

export class BaseRepository<T>{
  protected table: string

  constructor (tableName: string){
    this.table=tableName;
  }

  async getById(id: string): Promise<T>{
    const {data, error} = await supabase.from(this.table).select("*").eq("id", id).single();
    if (error) throw new Error(error.message);
    return data;
  }
}