import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {ETBundleListComponent} from "./etbundle-list/etbundle-list.component";
import {DefaultComponent} from "./default/default.component";
import {ETBundleEditComponent} from './etbundle-edit/etbundle-edit.component';
import {ETBundlePrintComponent} from './etbundle-print/etbundle-print.component';
import {ETHelpComponent} from './et-help/et-help.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import { ChangelogComponent } from './changelog/changelog.component';


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
    path: 'etbundlePrint/:id',
    component: ETBundlePrintComponent
  },
  {
    path: 'etbundleTestcases/:id',
    component: ETBundlePrintComponent
  },
  {
    path: 'etbundleChangelog/:id',
    component: ChangelogComponent
  },
  {   path: 'help',
     component: ETHelpComponent
  },
  {   path: 'help#bundle',
     component: ETHelpComponent
  },
  {   path: 'login',
  component: LoginComponent
  },

  {   path: 'logout',
  component: LogoutComponent
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
