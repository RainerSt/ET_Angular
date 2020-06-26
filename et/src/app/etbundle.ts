import {ET} from "./et";
import {Change} from "./change";

export interface ETBundle {
  id: number;
  project: string;
  name: string;
  comment: string;
  editor: string;
  status: number;
  version: string;
  ets:  ET[];
  changehistory: Change[];

}
