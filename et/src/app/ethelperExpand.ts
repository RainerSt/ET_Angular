
import { ET } from './et';
import {AktionsAnzeiger } from './aktionsAnzeiger';
import {BedingungsAnzeiger } from './bedingungsAnzeiger';


export class ETHelperExpand {
  constructor(
   
  ) {
    
  }


  expandRule(et: ET, index:Number){
     console.log ("expandRule " + index );
      et.bugs = [];
      for(let i=0; i<et.conditions[0].rules.length; i++){
         for(let j=0; j<et.conditions.length; j++){
            if ( et.conditions[j].rules[i].value === "-"){
              this.duplicateRule(et, i);
              et.conditions[j].rules[i].value = "j"
              et.conditions[j].rules[i + 1].value = "n"
              return;
            }
         }
         
      }

  }

  duplicateRule(et:ET, index: number){
    console.log("duplicateRule" + index);
    for(let i=0; i < et.conditions.length; i++){
      var neuerBedingungsAnzeiger:BedingungsAnzeiger ={
        value: et.conditions[i].rules[index].value,
        fehlerhaft: false
      }
      et.conditions[i].rules.splice(index + 1, 0, neuerBedingungsAnzeiger)
    }
    for(let i=0; i < et.actions.length; i++){

      var neuerAktionsAnzeiger:AktionsAnzeiger ={
        value: et.actions[i].rules[index].value
      }
      et.actions[i].rules.splice(index + 1, 0, neuerAktionsAnzeiger)
   }

  }

}
