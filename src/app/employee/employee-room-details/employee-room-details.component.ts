import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-room-details',
  templateUrl: './employee-room-details.component.html',
  styleUrls: ['./employee-room-details.component.css']
})
export class EmployeeRoomDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("this is the EmployeeRoomDetailsComponent");
  }

}
