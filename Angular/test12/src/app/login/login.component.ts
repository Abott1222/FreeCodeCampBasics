import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin:any;
  constructor() { }

  ngOnInit() {
    this.userLogin = {};
  }

  handleClick(user) {
    console.log(user);
  }

}
