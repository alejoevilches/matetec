import { BaseRepository } from "./BaseRepository";
import { IUser } from "@/types/user";

export class UserRepository extends BaseRepository<IUser>{
  constructor(){
    super("usuarios")
  }

  async getUserByAuthId(authId: string){
    return this.getById(authId)
  }
}