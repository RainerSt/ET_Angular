import { BedingungsAnzeiger }from "./bedingungsAnzeiger";

export interface Bedingung {
  id: number;
  comment: string;
  condition: string;
  rules : BedingungsAnzeiger[];
}
