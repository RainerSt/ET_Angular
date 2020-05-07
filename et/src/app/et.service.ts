import {Injectable} from '@angular/core';
import {ET} from "./et";
import {ETBundle} from "./etbundle";
import {BedingungsAnzeiger} from "./bedingungsAnzeiger";
import {AktionsAnzeiger} from "./aktionsAnzeiger";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ETService {


  constructor(private http: HttpClient) {
  }
  createETBundle(etbundle: ETBundle) {
    return this.http.post('http://localhost:3000/etbundles', etbundle);
  }
  deleteETBundle(id: number) {
    return this.http.delete('http://localhost:3000/etbundles/' + id);
  }
  getETBundles()  {
    return this.http.get<ETBundle[]>('http://localhost:3000/etbundles');
  }
  getOneETBundle(id: number) {
    return this.http.get<ETBundle>('http://localhost:3000/etbundles/' + id);
  }
  updateETBundle(etbundle: ETBundle) {
    return this.http.put('http://localhost:3000/etbundles/' + etbundle.id, etbundle);
  }

  checkET(et: ET){
  
     et.bugs[0] = "Hier werden Fehler angezeigt" ;
  
  }

  collapseET(et: ET){
    console.log("Service collapse et " + et.name);
     et.conditions.forEach(function (value) {
      console.log(value);
    }); 
  }

  expandET(et: ET){
    console.log("Service expand et " + et.name);
    let neueBedingungen: BedingungsAnzeiger[];
    let neueAktionen:    AktionsAnzeiger[];

    for(let i=0; i<et.conditions.length; i++){
      console.log(et.conditions[i].comment);
      for(let j=0; j < et.conditions[i].rules.length; j++){
        console.log(et.conditions[i].rules[j].value);
        if (et.conditions[i].rules[j].value == "-"){
          console.log("muss expandiert werden");
        } else {
          console.log("direktübernehmen");
        }
      }
    }
  }
}
