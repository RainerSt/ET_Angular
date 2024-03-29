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
import { ETBundlePrintComponent } from './etbundle-print/etbundle-print.component';
import { ETEditComponent } from './et-edit/et-edit.component';
import { Tab, Tabs } from './_templates/Tabs';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ETHelpComponent } from './et-help/et-help.component';
import { FilterdataPipe } from './filterdata.pipe';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { EtHelpDialogComponent } from './et-help-dialog/et-help-dialog.component';
import { EtJavaDialogComponent } from './et-java-dialog/et-java-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ETBundleListComponent,
    DefaultComponent,
    ETBundleNewComponent,
    ETBundleEditComponent,
    ETBundlePrintComponent,
    ETEditComponent,
    Tabs,
    Tab,
    ETHelpComponent,
    FilterdataPipe,
    LoginComponent,
    LogoutComponent,
    ChangelogComponent,
    EtHelpDialogComponent,
    EtJavaDialogComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
      ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ],
})
export class AppModule { }
