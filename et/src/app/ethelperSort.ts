
import { ET } from './et';
import {AktionsAnzeiger } from './aktionsAnzeiger';
import {BedingungsAnzeiger } from './bedingungsAnzeiger';



export class ETHelperSort {
  private sortorderUp = true;

  constructor( up: boolean){
    this.sortorderUp = up
  }

  sortETRules(et: ET){
    
    for(let i=0; i<et.conditions.length * 2; i++){
      let rulescount = et.conditions[0].rules.length
      console.log ("sortETRules  rulecount: " + rulescount)
      for(let i=0; i<et.conditions.length; i++){
        for(let j=0; j < rulescount - 1; j++){
           let value = et.conditions[i].rules[j].value
           let nextvalue = et.conditions[i].rules[j +1].value
             if (! this.isInSortOrder(this.sortorderUp, et, i, j)){
                this.changePosition(et, j)
             }
          }
      }
    }
  }

  isInSortOrder(sortorderUp:boolean, et:ET, condNr:number, ruleNr:number){
      
      let ruleAsString:string = ""
      let nextRuleAsString:string  = ""
      for(let i=0; i<et.conditions.length; i++){
        let value = et.conditions[i].rules[ruleNr].value
        let nextvalue = et.conditions[i].rules[ruleNr + 1].value
        ruleAsString = ruleAsString + value
        nextRuleAsString = nextRuleAsString + nextvalue
      }

      console.log ("Sortstring:     " + ruleAsString)
      console.log ("Sortstring nxt: " + nextRuleAsString)

      if (sortorderUp){
         if (nextRuleAsString > ruleAsString) return true
      } else{
         if (nextRuleAsString < ruleAsString) return true
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
