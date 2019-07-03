import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  title = 'User Login';
  LoginForm: FormGroup;
  submitted = false;
  loading = false;
  error: string;
  returnUrl: string;
  $user_data = {};


  constructor(private router: Router, private loginService: LoginService) {
    // redirect to home if already logged in

    if (this.loginService.currentUserValue && this.loginService.currentUserValue.userType) {
        if (this.loginService.currentUserValue.userType === 'admin') {
          this.router.navigate(['/admin']);
        } else {
            if (this.loginService.currentUserValue.userType === 'employee') {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/employee']);
            }
        }
    } else {
      this.router.navigate(['/login']);
    }

  }

  ngOnInit() {

    // get return url from route parameters or default to '/'
    this.returnUrl =  '/';

    this.LoginForm = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.LoginForm.controls; }

  onClickSubmit(roomdata) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.LoginForm.invalid) {
      alert('df');
      return;
    } else {

      this.loading = true;
      this.loginService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                this.$user_data = data;
                if (data.userType === 'employee') {
                  this.router.navigate(['/employee']);
                } else{
                  if (data.userType === 'admin') {
                    this.router.navigate(['/admin']);
                  }
                }
              },
              error => {
                this.error = error;
                this.loading = false;
              });
    }
  }


}
