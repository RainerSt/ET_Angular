import { Component } from '@angular/core';
import {environment} from "../environments/environment";
import {ETService} from "./et.service";
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ET -- Condition-Table-Creator';
  devMode = !environment.production;
  loggedInUser:User;
  public loggedin: boolean = false

  constructor( private etService: ETService,) {

  }

  ngOnInit() {
    this.etService.user.subscribe(usr => {
      console.log ("app user changed " + usr)
       this.loggedInUser = usr;
       if (usr.userId != "unknown"){
         this.loggedin = true
       }
    });
  }
}
