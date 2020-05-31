
import { ET } from './et';
import {AktionsAnzeiger } from './aktionsAnzeiger';
import {BedingungsAnzeiger } from './bedingungsAnzeiger';



export class ETHelperSort {
  private sortorderUp = true;

  constructor( up: boolean){
    this.sortorderUp = up
  }

  sortETRules(et: ET){
    for(let i=0; i<et.conditions.length; i++){
      for(let i=0; i<et.conditions.length; i++){
        for(let j=0; j<et.conditions[0].rules.length - 1; j++){
           if (this.sortorderUp){
             if (et.conditions[i].rules[j].value === "n" &&
                et.conditions[i].rules[j +1].value === "j"){
                this.changePosition(et, j)
             }
            } else {
              if (et.conditions[i].rules[j].value === "j" &&
              et.conditions[i].rules[j +1].value === "n"){
              this.changePosition(et, j)
               } 
             }
          }
      }
    }
  }
  changePosition(et: ET, index: number){
      console.log("changePosition Rule " + index);
      for(let i=0; i<et.conditions.length; i++){
          let zvalue = et.conditions[i].rules[index].value
          et.conditions[i].rules[index].value =  et.conditions[i].rules[index + 1].value
          et.conditions[i].rules[index + 1].value = zvalue
      }
      for(let i=0; i<et.actions.length; i++){
        let zvalue = et.actions[i].rules[index].value
        et.actions[i].rules[index].value =  et.actions[i].rules[index + 1].value
        et.actions[i].rules[index + 1].value = zvalue
 
      }

  }
}
