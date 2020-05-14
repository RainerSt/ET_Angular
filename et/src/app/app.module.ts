import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ETBundleListComponent } from './etbundle-list/etbundle-list.component';
import { DefaultComponent } from './default/default.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import { ETBundleNewComponent } from './etbundle-new/etbundle-new.component';
import { ETBundleEditComponent } from './etbundle-edit/etbundle-edit.component';
import { ETEditComponent } from './et-edit/et-edit.component';
import { Tab, Tabs } from './_templates/Tabs';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ETBundleListComponent,
    DefaultComponent,
    ETBundleNewComponent,
    ETBundleEditComponent,
    ETEditComponent,
    Tabs,
    Tab
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
