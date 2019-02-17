import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("this is the UserLoginComponent");
  }

  public username:string;
  public password:string;

  loginClick() {
    if(this.username.includes("admin")){
      this.router.navigate(['/admin-side-nav-bar-component']);
    }else{
      this.router.navigate(['/side-nav-bar-component']);
    }
  }

}
