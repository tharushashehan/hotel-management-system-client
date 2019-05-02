import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('this is the UserLoginComponent');
  }

  loginClick() {
    if (this.username.includes('admin')) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['employee']);
    }
  }

}
