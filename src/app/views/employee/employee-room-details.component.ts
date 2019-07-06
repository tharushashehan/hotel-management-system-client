import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'employee-room-details.component.html'
})
export class EmployeeRoomDetailsComponent implements OnInit {

  title = 'Create Leave';
  LeaveForm: FormGroup;
  submitted = false;
  loading = false;
  error: string;
  selectedNumber = 1;
  rooms_data = [];

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {

    this.employeeService.getRoomDetails()
      .pipe(first())
      .subscribe(rooms => this.rooms_data = rooms);

  }

}

