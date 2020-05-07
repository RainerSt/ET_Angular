import { AktionsAnzeiger }from "./aktionsAnzeiger";

export interface Aktion {
  id: number;
  comment: string;
  ausdruck: string;
  rules : AktionsAnzeiger[];
}
