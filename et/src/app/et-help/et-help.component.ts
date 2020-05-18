import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-et-help',
  templateUrl: './et-help.component.html',
  styleUrls: ['./et-help.component.scss']
})
export class ETHelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectChanged(value:string){
    console.log("selected value:" + value)
  }
}
