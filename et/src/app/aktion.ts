import { AktionsAnzeiger }from "./aktionsAnzeiger";

export interface Aktion {
  id: number;
  comment: string;
  action: string;
  rules : AktionsAnzeiger[];
}
