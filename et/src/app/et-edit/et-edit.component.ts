import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ETService} from "../et.service";
import {ET} from "../et";
import {Aktion } from '../aktion';
import {AktionsAnzeiger } from '../aktionsAnzeiger';
import { Bedingung } from '../bedingung';
import {BedingungsAnzeiger } from '../bedingungsAnzeiger';


@Component({
  selector: 'app-et-edit',
  templateUrl: './et-edit.component.html',
  styleUrls: ['./et-edit.component.scss']
})



export class ETEditComponent implements OnInit {
  @Input() et :ET; 
  public id: number;
  maxRules : boolean = false;
  maxActions : boolean = false;
  minRules : boolean = false;
  minActions : boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private etService: ETService,
  ) {
  }

  ngOnInit() {
  
  }
  dismiss() {
    this.router.navigate(['/etbundle']);
  }
  addAction(){
    var neueaktion:Aktion  = {
      id: 0,
      comment: "",
      action: "",
      rules:[]
    }
    var actioncount = this.et.actions.length;
    for(let j=0; j < this.et.actions[0].rules.length; j++){
       var neuerAktionsAnzeiger:AktionsAnzeiger ={
          value: "-"
       }
       neueaktion.rules[j] = neuerAktionsAnzeiger;
    }
    neueaktion.id = actioncount + 1;
    this.et.actions[actioncount] = neueaktion;

    if (actioncount > 7) this.maxActions = true;
    if (actioncount == 1) this.minActions = true;
  }
  addCondition(){
    var neuebedingung:Bedingung  = {
      id: 0,
      comment: "",
      condition: "",
      rules:[]
    }
    var bedingungscount = this.et.conditions.length;
    for(let j=0; j < this.et.conditions[0].rules.length; j++){
       var neuerBedingungsAnzeiger:BedingungsAnzeiger ={
          value: "-",
          fehlerhaft: false
       }
       neuebedingung.rules[j] = neuerBedingungsAnzeiger;
    }
    neuebedingung.id = bedingungscount + 1;
    this.et.conditions[bedingungscount] = neuebedingung;
    
    if (bedingungscount> 3) this.maxRules = true;
    if (bedingungscount ==1 ) this.minRules = true;
  }
  removeCondition(){ 
    var conditioncount = this.et.conditions.length;
    if (conditioncount === 2) return;
    this.et.conditions.splice(conditioncount - 1,1);
  }

  removeAction(){ 
    var actioncount = this.et.actions.length;
    if (actioncount === 1) return;
    this.et.actions.splice(actioncount - 1,1);
  }
  check() {
    console.log("Check et " );
    this.et.bugs = [];
    this.etService.checkET(this.et);
  }
  expand() {
    console.log("Expand et " );
    this.etService.expandET(this.et);
  }
  collapse() {
    console.log("Collapse et " );
    this.etService.collapseET(this.et);
  }

}
