
export class Change{
  userId: string = "unknown";
  version: string = "0";
  timestamp: string;

  constructor(userid:string, version:string, timestp: string){
    this.userId = userid;
    this.version = version;
    this.timestamp = timestp;
  }


}
