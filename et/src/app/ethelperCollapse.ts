
import { ET } from './et';
import {AktionsAnzeiger } from './aktionsAnzeiger';
import {BedingungsAnzeiger } from './bedingungsAnzeiger';


export class ETHelperCollapse {
  private lastConditionJN:number
  private entireET:boolean = false
  constructor(
   
  ) {
    
  }

  collapseET(et: ET){
    this.entireET = true;
    for(let i=0; i<et.conditions.length;i++){
      for(let j=0; j<et.conditions[0].rules.length; j++){
        this.collapseRule(et, j);
      }
    }
  }

  collapseRule(et: ET, index:number){
     console.log ("collapse " + index );
      if (! this.hasEqualActions(et, index) ){
          if (!this.entireET){
             et.bugs.push ("Aktionen zur nächsten Regel sind unterschiedlich")
          }
          return;
      }
      if (! this.lastSetConditionisYesAndNo(et, index) ){
        if (!this.entireET){
           et.bugs.push ("Bedingugen zur nächsten Regel sind nicht J/N")
        }
        return;
       }
     
     console.log("collapse rule possible remove ")
     this.removeRule(et, index)
     console.log("change to '-' condition: " + this.lastConditionJN + "index: " + index)
     et.conditions[this.lastConditionJN].rules[index].value = "-"
  }

  hasEqualActions(et: ET, index:number){
      for(let j=0; j<et.actions.length; j++){
         if ( et.actions[j].rules[index].value != et.actions[j].rules[index +1].value){
           return false;
         }
      }
      return true;
  }
  
  lastSetConditionisYesAndNo(et: ET, index:number){
    for(let j=et.conditions.length - 1; j >= 0 ; j--){
      let ruleakt = et.conditions[j].rules[index].value
      let rulenext = et.conditions[j].rules[index + 1].value
      
      if ( ruleakt === "-"  && rulenext === "-"){

      } else  if (ruleakt  === "j"
           && rulenext === "n" ){
        this.lastConditionJN = j
        return true;

      } else if (ruleakt  === "n"
           && rulenext === "j" ){
         this.lastConditionJN = j
         return true;
      }
    }
    return false;
  }


  removeRule(et:ET, index: number){
    console.log("removeRule" + index);
    for(let i=0; i < et.conditions.length; i++){
      et.conditions[i].rules.splice(index, 1)
    }
    for(let i=0; i < et.actions.length; i++){
      et.actions[i].rules.splice(index,1)
   }

  }
}
