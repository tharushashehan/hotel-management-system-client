import { Component , OnInit  } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private employeeService: EmployeeService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) {
    if (this.route.snapshot.queryParamMap.get('registered')) {
      this.toastr.success('leave applied successfully', 'Success!');
      this.router.navigate(['/employee/apply-leave']);
  }
  
  }

  ngOnInit() {

    this.employeeService.getLeavs().pipe(first()).subscribe(
      leaves => {
        this.leaves_data = leaves
      }, 
      error => {
        this.error = error;
        this.loading = false;
      }
    )

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

  onClickSubmit(leavedata) {

    console.log(this.LeaveForm.invalid);
    console.log(this.LeaveForm);

    this.submitted = true;

    // stop here if form is invalid
    if (this.LeaveForm.invalid) {
      return;
    } else {
      console.log(leavedata);
      this.loading = true;
      this.employeeService.submitLeave(leavedata)
          .pipe(first())
          .subscribe(
              async data => {
                if (data == null){
                  this.toastr.error('Can not apply leave, Please check the dates', 'Error!');
                } else {
                  await this.router.navigate(['/employee/apply-leave'], {queryParams: {registered: true}});
                  window.location.reload();
                }

              },
              error => {
                this.toastr.error('Can not apply leave', 'Error!');
                this.error = error;
                this.loading = false;
              });
    }
  }

}
