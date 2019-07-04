import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { EmployeeApplyLeaveComponent } from './employee-apply-leave.component';
import { EmployeeRoomBookingComponent } from './employee-room-booking.component';
import { EmployeeRoomDetailsComponent } from './employee-room-details.component';



// Buttons Routing
import { EmployeeRoutingModule } from './employee-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmployeeDashboardComponent,
    EmployeeApplyLeaveComponent,
    EmployeeRoomDetailsComponent,
    EmployeeRoomBookingComponent,
  ]
})
export class EmployeeModule { }
