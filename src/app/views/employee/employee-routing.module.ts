import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { EmployeeApplyLeaveComponent } from './employee-apply-leave.component';
import { EmployeeRoomBookingComponent } from './employee-room-booking.component';
import { EmployeeRoomDetailsComponent } from './employee-room-details.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employee'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'apply-leave',
        component: EmployeeApplyLeaveComponent,
        data: {
          title: 'Apply Leave'
        }
      },
      {
        path: 'room-booking',
        component: EmployeeRoomBookingComponent,
        data: {
          title: 'Room Booking'
        }
      },
      {
        path: 'room-details',
        component: EmployeeRoomDetailsComponent,
        data: {
          title: 'Room Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
