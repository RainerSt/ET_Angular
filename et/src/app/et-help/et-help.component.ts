import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-et-help',
  templateUrl: './et-help.component.html',
  styleUrls: ['./et-help.component.scss']
})
export class ETHelpComponent implements OnInit {
  public selectedOption:string = ":"
  constructor() { }

  ngOnInit() {
  }
  selectChanged(value:string){
    console.log("selected value:" + value)
    this.selectedOption = ":";
  }
}
