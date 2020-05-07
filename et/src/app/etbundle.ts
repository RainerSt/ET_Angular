import {ET} from "./et";

export interface ETBundle {
  id: number;
  project: string;
  name: string;
  comment: string;
  ets:  ET[];
}
