import {Injectable, Output} from '@angular/core';
import {ET} from "./et";
import {Bedingung} from "./bedingung";
import {Aktion} from "./aktion";
import {ETBundle} from "./etbundle";
import {BedingungsAnzeiger} from "./bedingungsAnzeiger";
import {AktionsAnzeiger} from "./aktionsAnzeiger";
import {HttpClient} from "@angular/common/http";
import { User } from './user';
import { Change } from './change';
import { Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ETService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(new User("unknown"))
    this.user = this.userSubject.asObservable();

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
    this.addChangelog(etbundle)
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
    let newVersion = Number(etbundle.version) + 1
    etbundle.version = newVersion.toString();
    this.addChangelog(etbundle)
    return this.http.put('http://localhost:3000/etbundles/' + etbundle.id, etbundle);
  }

  addChangelog(etbundle: ETBundle){
    if (etbundle.changehistory === undefined){
      etbundle.changehistory = new Array
    }
    etbundle.changehistory.push(
      new Change(this.userSubject.value.userId, 
                 etbundle.version, 
                 new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString())
    )
  }


  checkET(et: ET){
  
     et.bugs[0] = "Hier werden Fehler angezeigt" ;
  
  }

  getBundleStatus(){
    let status=[
      "Konzeption",
      "in Prüfung",
      "freigegeben",
      "zurückgestellt",
      "verworfen",
      "archiviert"]
    return status
  }
 

  getUser(){
    console.log ("service getUser :" + this.userSubject.value)
    return this.userSubject.value;
    
  }

  setUser(user: User){
    console.log ("service setUser :" + user)
    this.userSubject.next(user);
  }
}
