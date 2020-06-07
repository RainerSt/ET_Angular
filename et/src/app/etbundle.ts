import {ET} from "./et";

export interface ETBundle {
  id: number;
  project: string;
  name: string;
  comment: string;
  editor: string;
  status: number;
  version: string;
  ets:  ET[];
  changehistory: string[];
}
