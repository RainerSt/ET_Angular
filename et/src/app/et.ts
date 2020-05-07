import { Bedingung } from './bedingung';
import { Aktion } from './aktion';


export interface ET {
  id: number;
  name: string;
  comment: string;
  conditions: Bedingung[];
  actions:    Aktion[];
  bugs:      string[];
}
