import { Component , OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'admin-user-create.component.html'
})
export class AdminUserCreateComponent implements OnInit {

  title = 'Create User';
  UserForm: FormGroup;
  submitted = false;
  loading = false;
  error: string;

  users_data = [];
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) {

    if (this.route.snapshot.queryParamMap.get('registered')) {
        this.toastr.success('User created successfully', 'Success!');
        this.router.navigate(['/admin/users/create']);
    }
  }

  ngOnInit() {

    // this.route.queryParams.subscribe(params => {
    //  console.log(params);
    // });

      this.userService.getUsers()
        .pipe(first())
        .subscribe(users => {

          this.users_data = users;

        },
        error => {
          this.error = error;
          this.loading = false;
        });

    this.UserForm = new FormGroup({
      userId: new FormControl('', Validators.compose([
        Validators.required
      ])),
      userFName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      userLName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      userNIC: new FormControl('', Validators.compose([
        Validators.required
      ])),
      userEmail: new FormControl('', Validators.compose([
        Validators.required
      ])),
      userType: new FormControl('', Validators.compose([
        Validators.required
      ])),
      userImage: new FormControl('', Validators.compose([
        Validators.required
      ])),
      userAddrs: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.UserForm.controls; }

  onClickSubmit(userdata) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.UserForm.invalid) {
      return;
    } else {

      this.loading = true;
      this.userService.submitUser(userdata)
          .pipe(first())
          .subscribe(
              data => {
                this.router.navigate(['/admin/users/create'], { queryParams: { registered: true }});
                window.location.reload();
              },
              error => {
                this.toastr.error('Can not create user', 'Error!');
                this.error = error;
                this.loading = false;
              });
    }
  }


}
