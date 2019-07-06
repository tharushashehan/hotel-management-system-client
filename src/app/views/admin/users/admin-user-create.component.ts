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
  isEdit = false;
  loading = false;
  error: string;
  isReload = true;

  users_data = [];
  user_data = {};
  user_id = null;
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) {

    if (this.route.snapshot.queryParamMap.get('registered')) {
        this.toastr.success('User created successfully', 'Success!');
        this.router.navigate(['/admin/users/create']);
    }
    if (this.route.snapshot.queryParamMap.get('updated')) {
      this.toastr.success('User updated successfully', 'Success!');
      this.router.navigate(['/admin/users/create']);
    }
    if (this.route.snapshot.queryParamMap.get('deleted')) {
      this.toastr.info('User deleted successfully', 'Success!');
      this.router.navigate(['/admin/users/create']);
    }
  }

  ngOnInit(): void {



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
      id: new FormControl('', Validators.compose([])),
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
      userPassword: new FormControl('', Validators.compose([
        Validators.required
      ])),
      userType: new FormControl('', Validators.compose([
        Validators.required
      ])),
      userAddrs: new FormControl('', Validators.compose([])),
      userImage: new FormControl('', Validators.compose([])),
    });

    this.route.queryParams.subscribe(params => {
      // get user data in edit
      if (params['id']) {

        this.user_id = params['id'];
        this.isEdit = true;
        this.userService.getUser(this.user_id)
            .pipe(first())
            .subscribe(user => {
                  //this.UserForm.setValue(user);
                  this.UserForm.patchValue({
                    id: user.id,
                    userId: user.userId,
                    userFName: user.userFName,
                    userLName: user.userLName,
                    userNIC: user.userNIC,
                    userEmail: user.userEmail,
                    userPassword: user.userPassword,
                    userType: user.userType,
                    userAddrs: user.userAddrs,
                    userImage: user.userAddrs
                  });
                },
                error => {
                  this.error = error;
                  this.loading = false;
                });
      }

    });



  }

  // convenience getter for easy access to form fields
  get f() { return this.UserForm.controls; }

  onClickSubmit(userdata) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.UserForm.invalid) {
      if (this.user_id){
        this.toastr.error('update user data to update user details', 'Error!');
      } else {
        this.toastr.error('Can not create user check your form', 'Error!');
      }
      return;
    } else {

      this.loading = true;

      if (this.route.snapshot.queryParamMap.get('id')) {
        this.userService.updateUser(this.user_id, userdata)
            .pipe(first())
            .subscribe(
                async data => {
                  await this.router.navigate(['/admin/users/create/'], {queryParams: {updated: true}});
                  window.location.reload();
                },
                error => {
                  this.toastr.error('Can not update user', 'Error!');
                  this.error = error;
                  this.loading = false;
                });
      } else {
        this.userService.submitUser(userdata)
            .pipe(first())
            .subscribe(
                async data => {
                  await this.router.navigate(['/admin/users/create/'], {queryParams: {registered: true}});
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

  onClickDelete(userId) {

    this.submitted = true;

      this.loading = true;
      this.userService.deleteUser(userId)
          .pipe(first())
          .subscribe(
              async data => {
                await this.router.navigate(['/admin/users/create/'], { queryParams: { deleted: true }});
                window.location.reload();
              },
              error => {
                this.toastr.error('Can not delete user', 'Error!');
                this.error = error;
                this.loading = false;
              });
  }

  onClickEdit(userId) {

    this.submitted = true;

    this.loading = true;
    this.router.navigate(['/admin/users/create/' ], { queryParams: { id: userId }});
  }


}
