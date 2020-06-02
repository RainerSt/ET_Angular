import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ETService} from "../et.service";
import {ET} from "../et";
import {ETHelper} from "../ethelper";
import {ETHelperExpand} from "../ethelperExpand";
import {Aktion } from '../aktion';
import {AktionsAnzeiger } from '../aktionsAnzeiger';
import { Bedingung } from '../bedingung';
import {BedingungsAnzeiger } from '../bedingungsAnzeiger';
import { ETHelperCollapse } from '../ethelperCollapse';
import { ETHelperJavaCode } from '../ethelperJavaCode';
import { ETHelperSort } from '../ethelperSort';

@Component({
  selector: 'app-et-edit',
  templateUrl: './et-edit.component.html',
  styleUrls: ['./et-edit.component.scss']
})



export class ETEditComponent implements OnInit {
  @Input() et :ET; 
  @Output() etDeleteEvent = new EventEmitter<ET>();
  public id: number;
  maxRules : boolean = false;
  maxActions : boolean = false;
  minRules : boolean = false;
  minActions : boolean = false;

  //-Popups
  popoverTitle = 'Lösche ET';
  javaTitle = 'Java - Code'
  popoverMessage = 'Soll diese ET endgültig gelöscht werden ?';
  confirmClicked = false;
  cancelClicked = false;
  ruleActions = [":", "+", "-" , ">", "<", "*"];

  visualizedRule:number = -1;
  hints:string[] = [];

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
  downCondition(id: number){ 
    console.log ("condition down " + id);
    let from = this.et.conditions[id -1];
    let to   = this.et.conditions[id];

    //save values from
    let zcondition = from.condition;
    let zcomment = from.comment;
    let zrules   = from.rules;

    from.condition = to.condition;
    from.comment = to.comment;
    from.rules = to.rules;

    to.condition = zcondition;
    to.comment = zcomment;
    to.rules = zrules;
  }

  downAction(id: number){ 
    console.log ("action down " + id);
    let from = this.et.actions[id -1];
    let to   = this.et.actions[id];

    //save values from
    let zaction = from.action;
    let zcomment = from.comment;
    let zrules   = from.rules;

    from.action = to.action;
    from.comment = to.comment;
    from.rules = to.rules;

    to.action = zaction;
    to.comment = zcomment;
    to.rules = zrules;
  }
  check() {
    console.log("Check et " );
    let checker = new ETHelper();
    checker.checkET(this.et);
    this.setHint("ET ist fehlerfrei", true)
  }
  sortRulesUp() {
    console.log("SortRules et " );
    let sorter = new ETHelperSort(true);
    sorter.sortETRules(this.et);
    this.setHint("ET wurde erfolgreich aufwärts sortiert", true)
  }
  sortRulesDown() {
    console.log("SortRules et " );
    let sorter = new ETHelperSort(false);
    sorter.sortETRules(this.et);
    this.setHint("ET wurde erfolgreich abwärts sortiert", true)
  }

  expand() {
    console.log("Expand et " );

    if (this.hasBugs()){
      this.et.bugs.push ("Nur fehlerfreie ET's können expandiert werden");
      return;
    }
    let expander = new ETHelperExpand();
    expander.expandET(this.et);
    this.setHint("ET wurde erfolgreich expandiert", true)
  }
  collapse() {
    console.log("Collapse et " );
   
    if (this.hasBugs()){
      this.et.bugs.push ("Nur fehlerfreie ET's können verdichtet werden");
      return;
    }
    let collapser = new ETHelperCollapse();
    collapser.collapseET(this.et);
    this.setHint("ET wurde erfolgreich verdichtet", true)
  }
  hasBugs(){
    this.check();
    if (this.et.bugs.length > 0) return true;
    return false
  }

  duplicateRule(index: number){
    console.log("duplicateRule" + index);
    if (this.et.conditions[0].rules.length === 32){
      this.et.bugs.push ("Maximale Anzahl an Regeln schon erreicht.");
      return;
    }
    let expander = new ETHelperExpand();
    expander.duplicateRule(this.et, index);

  }

  removeRule(index: number){
    console.log("removeRule" + index);
    let collapser = new ETHelperCollapse();
    collapser.removeRule(this.et, index);
  }

  expandRule(index: number){
     console.log("expandRule: " + index);
     let expander = new ETHelperExpand();
     expander.expandRule(this.et, index);
     this.setHint("Regel " + (index + 1) + " erfolgreich expandiert ", true)
  }

  collapseRule(index: number){
    console.log("collapseRule: " + index);
    let collapser = new ETHelperCollapse();
    collapser.collapseRule(this.et, index);
    this.setHint("Regel " + (index + 1) + " erfolgreich verdichtet ", true)
  }

  visualizeRule(index: number){
    console.log("visualizeRule: " + index);
    this.visualizedRule = index;
  }

  onRightClick(index: number){
    console.log("rightClick: " + index);
    this.visualizedRule = index;
    return false
  }

  toggleConditionValue(rule:BedingungsAnzeiger){
    console.log("toggleConditionValue: " + rule);
    if (rule.value === "j") rule.value = "n"
    else if (rule.value === "n") rule.value = "-"
    else if (rule.value === "-") rule.value = "j"
    return false;
  }
  toggleActionValue(rule:AktionsAnzeiger){
    console.log("toggleActionValue: " + rule);
    if (rule.value === "x") rule.value = "-"
    else if (rule.value === "-") rule.value = "x"
    return false;
  }


  actionOnRule(index: number, val: string){
     switch (val) {
      case this.ruleActions[1]:
         this.duplicateRule(index);
        break;
    
       case this.ruleActions[2]:
        this.removeRule(index);
        break;
       
       case this.ruleActions[3]:
        this.expandRule(index);
        break;
       
      case this.ruleActions[4]:
       this.collapseRule(index);
        break;
      
      case this.ruleActions[5]:
        this.visualizeRule(index);
        break;
              
       default:
        this.visualizedRule = -1;
         break;
     }
  }

  deleteET(){
    console.log("delete et " + this.et.name);
    
      this.etDeleteEvent.emit(this.et);

  }

  confirm(){
    console.log("delete confirmed");
  }


  
  hilfe(){
    this.hints.push ("Eine Entscheidungstabelle ist ...");
  }
  jscipt(){
    this.et.bugs.push ("Generate JavaScript not implemented");
  }
  java(){
    let javagen = new ETHelperJavaCode();
     return javagen.getGeneratedJava(this.et);
  }


  setHint(hint:string, ifNoBug:boolean){
    this.hints = []
    if (ifNoBug && this.et.bugs.length === 0){
      this.hints.push(hint)
    } else {
      this.hints.push(hint)
    }
  }
}
