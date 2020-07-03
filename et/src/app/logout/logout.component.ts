import { Component, OnInit } from '@angular/core';
import {ETService} from "../et.service";
import { User } from '../user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private etService: ETService) { }

  ngOnInit(): void {
    this.etService.setUser(new User("unknown"))
  }

}
