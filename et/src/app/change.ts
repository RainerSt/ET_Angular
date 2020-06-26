
export class Change{
  userId: string = "unknown";
  timestamp: string;

  constructor(userid:string, timestp: string){
    this.userId = userid;
    this.timestamp = timestp;
  }


}
