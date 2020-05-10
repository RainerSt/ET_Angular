import { Component, Input } from '@angular/core';

@Component({
    selector: 'tabs',
    template: `
        <button *ngFor="let tab of tabs" (click)="selectTab(tab)" class="etnavbar{{tab.active}}">
          {{tab.tabTitle}}
        </button>
      <ng-content></ng-content>
    `,
    styles: [`
        button.etnavbarfalse{
          background-color: rgb(193, 211, 250);
        }
        button.etnavbar{
        background-color: rgb(193, 211, 250);
        }
        button.etnavbartrue{
            background-color: rgb(65, 245, 230); 
        }
        button.etnavbar:hover{
              background-color: rgb(65, 245, 230); 
        }
    `],
  })
  export class Tabs {
    tabs: Tab[] = [];
  
    selectTab(tab: Tab) {
      this.tabs.forEach((tab) => {
        tab.active = false;
      });
      tab.active = true;
    }
  
    addTab(tab: Tab) {
      if (this.tabs.length === 0) {
        tab.active = true;
      }
      this.tabs.push(tab);
    }
  }
  
  @Component({
    selector: 'tab',
    template: `
      <div [hidden]="!active">
        <ng-content></ng-content>
      </div>
    `
  })
  export class Tab {
  
    @Input() tabTitle: string;
    active: boolean;
  
    constructor(tabs:Tabs) {
      tabs.addTab(this);
    }
  }