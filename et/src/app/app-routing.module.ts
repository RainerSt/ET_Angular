import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {ETBundleListComponent} from "./etbundle-list/etbundle-list.component";
import {DefaultComponent} from "./default/default.component";
import {ETBundleEditComponent} from './etbundle-edit/etbundle-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent
  },

  {
    path: 'etbundle',
    component: ETBundleListComponent
  },
  {
    path: 'etbundle/:id',
    component: ETBundleEditComponent
  },
  
  {
    path: '**',
    component: DefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
