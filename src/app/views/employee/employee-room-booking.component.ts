import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { async } from 'q';

@Component({
  templateUrl: 'employee-room-booking.component.html'
})
export class EmployeeRoomBookingComponent implements OnInit {

  title = 'Room Booking';
  BookingForm: FormGroup;
  submitted = false;
  loading = false;
  error: string;

  booking_data = [];

  constructor(private employeeService: EmployeeService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) {
    if (this.route.snapshot.queryParamMap.get('registered')) {
      this.toastr.success('Room booking successful', 'Success!');
      this.router.navigate(['/employee/room-booking']);
    }
  }

  ngOnInit() {

    this.employeeService.getBookings().pipe(first()).subscribe(
      bookin => {
        console.log(bookin);
        this.booking_data = bookin
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    )

    this.BookingForm = new FormGroup({
      roomNo: new FormControl('', Validators.compose([
        Validators.required
      ])),
      startDate: new FormControl('', Validators.compose([
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
    return this.BookingForm.controls;
  }

  onClickSubmit(bookingdata) {
    
    this.submitted = true;

    // stop here if form is invalid
    if (this.BookingForm.invalid) {
      return;
    } else {

      this.loading = true;
      this.employeeService.submitBooking(bookingdata, bookingdata.roomNo)
        .pipe(first())
        .subscribe(
          async data => {
            if (data == null){
              this.toastr.error('Can not book the Room, please check the dates', 'Error!');
            } else{
              await this.router.navigate(['/employee/room-booking'], { queryParams: { registered: true } });
              window.location.reload();
            }

          },
          error => {
            this.toastr.error('Can not book the Room', 'Error!');
            this.error = error;
            this.loading = false;
          });
    }
  }

}

