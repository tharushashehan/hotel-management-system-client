import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-room-booking',
  templateUrl: './employee-room-booking.component.html',
  styleUrls: ['./employee-room-booking.component.css']
})
export class EmployeeRoomBookingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("this is the EmployeeRoomBookingComponent");
  }

}
