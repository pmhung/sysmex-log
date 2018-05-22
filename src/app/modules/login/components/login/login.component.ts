import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppService } from "../../../../app.service";
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  constructor(private router: Router, private appService: AppService) {
    this.user = new User();
    this.user.UserName = "customer";
    this.user.Password = "123456";
  }

  ngOnInit() {

  }

  login() {
    if (this.user.UserName == "customer" ) {
      this.user.role=0;
      this.user.isAuthor = true;
      this.user.Password = "";
      localStorage.setItem("currentUser", JSON.stringify(this.user));
      this.router.navigate(["/dashboard"]);
    }else if(this.user.UserName == "sysmex" ){
      this.user.role=1;
      this.user.isAuthor = true;
      this.user.Password = "";
      localStorage.setItem("currentUser", JSON.stringify(this.user));
      this.router.navigate(["/dashboard"]);
    }
  }
}
