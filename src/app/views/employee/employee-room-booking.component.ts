import { Component , OnInit  } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  constructor(private employeeService: EmployeeService, private router: Router) {
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

    alert('fef');
    this.submitted = true;

    // stop here if form is invalid
    if (this.BookingForm.invalid) {
      return;
    } else {

      this.loading = true;
      this.employeeService.submitBooking(bookingdata, bookingdata.roomNo)
          .pipe(first())
          .subscribe(
              data => {
                this.router.navigate(['/employee/room-booking'], {queryParams: {registered: true}});
              },
              error => {
                this.error = error;
                this.loading = false;
              });
    }
  }

}

