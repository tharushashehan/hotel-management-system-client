import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    console.log('this is the UserLoginComponent');
  }

  loginClick() {
    const auth = this.loginService.login(this.username, this.password);
    console.log(auth);
    if (this.username.includes('admin')) {
      if (auth.forEach.toString() === 'true') {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['error']);
      }
    } else {
      if (auth.forEach.toString() === 'true') {
        this.router.navigate(['employee']);
      } else {
        this.router.navigate(['error']);
      }
    }
  }

}
