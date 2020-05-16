import { Bedingung } from './bedingung';
import { BedingungsAnzeiger } from './bedingungsAnzeiger';
import { Aktion } from './aktion';
import { ET } from './et';
import { checkAndUpdateTextDynamic } from '@angular/core/src/view/text';
import { initDomAdapter } from '@angular/platform-browser/src/browser';


export class ETHelper {
  private maxExpanded:string[][]
  constructor(
   
  ) {
    this.init();
  }

  init(){
    this.maxExpanded =[ 
       // stelle 1 enthält Anzeiger, ob abgedeckt
      ["0","j","j","j","j","j"], 
		  ["0","j","j","j","j","n"],
		  ["0","j","j","j","n","j"],
		  ["0","j","j","j","n","n"],
		  ["0","j","j","n","j","j"],
		  ["0","j","j","n","j","n"],
		  ["0","j","j","n","n","j"],
		  ["0","j","j","n","n","n"],
		  ["0","j","n","j","j","j"],
		  ["0","j","n","j","j","n"],
		  ["0","j","n","j","n","j"],
		  ["0","j","n","j","n","n"],
		  ["0","j","n","n","j","j"],
		  ["0","j","n","n","j","n"],
		  ["0","j","n","n","n","j"],
		  ["0","j","n","n","n","n"],
		  ["0","n","j","j","j","j"],
		  ["0","n","j","j","j","n"],
		  ["0","n","j","j","n","j"],
		  ["0","n","j","j","n","n"],
		  ["0","n","j","n","j","j"],
		  ["0","n","j","n","j","n"],
		  ["0","n","j","n","n","j"],
		  ["0","n","j","n","n","n"],
		  ["0","n","n","j","j","j"],
		  ["0","n","n","j","j","n"],
		  ["0","n","n","j","n","j"],
		  ["0","n","n","j","n","n"],
		  ["0","n","n","n","j","j"],
		  ["0","n","n","n","j","n"],
		  ["0","n","n","n","n","j"],
		  ["0","n","n","n","n","n"]
  ]
  }

  checkET(et: ET){
      this.init();
      et.bugs = [];
      for(let i=0; i<et.conditions[0].rules.length; i++){
         let rule = ["","","","",""];
         for(let j=0; j<et.conditions.length; j++){
            rule[j] = et.conditions[j].rules[i].value;
         }
         this.markCoveredRules(rule);
         console.log ("rule: "+ rule);
      }
      //check counters, if not or multiple covered --> add bug
      for(let i=0; i< this.maxExpanded.length; i++){
        if (this.maxExpanded[i][0] === "0"){
          this.addBug(et, "Regel ist nicht abgedeckt: " +
                           this.getDisplayFormatOfRule (this.maxExpanded[i], et.conditions.length));
          } else if (this.maxExpanded[i][0] != "1"){
          this.addBug(et, "Regel ist mehrfach abgedeckt: " +
                           this.getDisplayFormatOfRule (this.maxExpanded[i], et.conditions.length));
        }
      }
  }
  addBug(et: ET, bug:string){
    let contains: boolean = false;
    et.bugs.forEach(element => {
       if (element === bug) contains = true;
    });
    if (!contains)    et.bugs.push(bug);

  }
  getDisplayFormatOfRule(rule: string[], rulecount:number){
      for(let i=0; i< rule.length; i++){
          return rule.splice(1, rulecount).toString().toUpperCase()
      }
  }

  markCoveredRules(rule: string[]){
     for(let i=0; i< this.maxExpanded.length; i++){
         this.markRuleCoveredBy(this.maxExpanded[i],rule );
     }
  }

  markRuleCoveredBy(list: string[],rule: string[]){
    let match:boolean = true;
    for(let i=1; i< list.length; i++){
      try {
        if (list[i] === rule[i-1]){  
          // console.log("anzeiger identisch : " + list[i] + " rule: " +rule[i] )      
        } else if  (rule[i-1] === "-"  || rule[i-1] === ""  || i > rule.length){  
          // console.log("anzeiger leer oder -: " + list[i] + " rule: " +rule[i] )      
        } else if  ( i > rule.length){  
          // console.log("anzeiger ausserhalb "+ i )      
        } else {
          // console.log("anzeiger matches false" + list[i] + " rule: " +rule[i] )     
          match = false
        }
      } catch (error) {
      }
    }
    if (match){
      console.log("match " + list + " rule: " +rule ) 
      this.incrementRuleCounter(list) 
    } else{
      console.log("no match " + list + " rule: " +rule ) 
    }
  }
  incrementRuleCounter(list: string[]){
    let counter:number = +list[0];
    counter++;
    list[0]= String(counter);
  }
}

