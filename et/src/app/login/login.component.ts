import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedin:boolean = false
  name:string = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){

     this.loggedin = true;
     this.router.navigate(['/etbundle']);
  }
}

