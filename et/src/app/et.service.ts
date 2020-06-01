import {Injectable} from '@angular/core';
import {ET} from "./et";
import {Bedingung} from "./bedingung";
import {Aktion} from "./aktion";
import {ETBundle} from "./etbundle";
import {BedingungsAnzeiger} from "./bedingungsAnzeiger";
import {AktionsAnzeiger} from "./aktionsAnzeiger";
import {HttpClient} from "@angular/common/http";
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class ETService {
  constructor(private http: HttpClient) {
  }
  createNewETinBundle(etbundle: ETBundle) {
    let newid = 1;
    try {
      newid = etbundle.ets.length + 1;
    } catch (error) {
      etbundle.ets = [];
    }
    console.log("createNewETinBundle " + etbundle.id);
    let newET: ET = {
      id: newid,
      name: "name of new et",
      comment: "comment of new et",
      conditions:[
        {
          id: 1,
          comment: "new condition comment",
          condition: "#BObject_isThatTrue()",
          rules : [
            {
              value: "j",
              fehlerhaft: false
             } as BedingungsAnzeiger,
             {
              value: "n",
              fehlerhaft: false
             } as BedingungsAnzeiger

          ]

        } as Bedingung
      ],
      actions:[
        {
          id: 1,
          comment: "new action comment",
          action: "#AObject_doThat()",
          rules : [
            {
              value: "-",
             } as AktionsAnzeiger,
             {
              value: "x",
             } as AktionsAnzeiger

          ]

        } as Aktion
      ],
      bugs:[]
    } as ET;

    console.log("new ET " + newET);
    etbundle.ets.push(newET);
    this.updateETBundle(etbundle);
  }

  createETBundle(etbundle: ETBundle) {
    console.log("create Bundle: " + etbundle)
    let rc = this.http.post('http://localhost:3000/etbundles', etbundle)
    console.log("create Bundle rc: " + rc)
    return rc;
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
