import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-apply-leave',
  templateUrl: './employee-apply-leave.component.html',
  styleUrls: ['./employee-apply-leave.component.css']
})
export class EmployeeApplyLeaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("this is the EmployeeApplyLeaveComponent");
  }

}
