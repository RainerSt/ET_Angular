
import { IUser } from './iUser';
export class User implements IUser{
  id: number = 0;
  userId: string = "unknown";
  name: string = "unknown";
  secret: string = "";
  role: string  = "Gast";

  constructor(userid: string){
     this.userId = userid
  }

  isGuest(){
    return this.role === "guest";
  };

  isEditor(){
    return this.role === "editor";
  };

  isAdmin(){
    return this.role === "admin";
  };

}
