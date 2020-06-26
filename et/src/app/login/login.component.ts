import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ETService} from "../et.service";
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedin:boolean = false
  userid:string = "unknown"

  constructor(private router: Router, 
              private etService: ETService,) { }

  ngOnInit(): void {
  }
  login(){

     this.loggedin = true;
     this.router.navigate(['/etbundle']);
     this.etService.setUser( new User(this.userid))
  }
}

