import { Component , OnInit  } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'employee-apply-leave.component.html'
})
export class EmployeeApplyLeaveComponent implements OnInit {

  title = 'Create Leave';
  LeaveForm: FormGroup;
  submitted = false;
  loading = false;
  error: string;

  leaves_data = [];

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {

    this.LeaveForm = new FormGroup({
      empID: new FormControl('', Validators.compose([
        Validators.required
      ])),
      leaveType: new FormControl('', Validators.compose([
        Validators.required
      ])),
      leaveDurationType: new FormControl('', Validators.compose([
        Validators.required
      ])),
      startingDate: new FormControl('', Validators.compose([
        Validators.required
      ])),
      endDate: new FormControl('', Validators.compose([
        Validators.required
      ])),
      remark: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.LeaveForm.controls;
  }

  onClickSubmit(userdata) {


    this.submitted = true;

    // stop here if form is invalid
    if (this.LeaveForm.invalid) {
      return;
    } else {

      this.loading = true;
      this.employeeService.submitLeave(userdata)
          .pipe(first())
          .subscribe(
              data => {
                this.router.navigate(['/rooms'], {queryParams: {registered: true}});
              },
              error => {
                this.error = error;
                this.loading = false;
              });
    }
  }

}
