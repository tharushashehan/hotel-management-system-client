import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavBarComponent } from './employee/side-nav-bar/side-nav-bar.component';
import { EmployeeDashBoardComponent } from './employee/employee-dash-board/employee-dash-board.component';
import { EmployeeApplyLeaveComponent } from './employee/employee-apply-leave/employee-apply-leave.component';
import { EmployeeRoomDetailsComponent } from './employee/employee-room-details/employee-room-details.component';
import { EmployeeRoomBookingComponent } from './employee/employee-room-booking/employee-room-booking.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./material.module";
import { AdminNavBarComponent } from './admin/admin-nav-bar/admin-nav-bar.component';
import { AdminCreateUserComponent } from './admin/admin-create-user/admin-create-user.component';
import { AdminCreateRoomComponent } from './admin/admin-create-room/admin-create-room.component';

const appRoutes: Routes = [
  { path: 'user-login-component', component: UserLoginComponent, data: { title: 'UserLoginComponent' } },
  { path: 'side-nav-bar-component', component: SideNavBarComponent, data: { title: 'SideNavBarComponent' }, children:[
    { path: 'employee-apply-leave-component', component: EmployeeApplyLeaveComponent, outlet: 'nav-bar', data: { title: 'EmployeeApplyLeaveComponent' } },
    { path: 'employee-dash-board-component', component: EmployeeDashBoardComponent,  outlet: 'nav-bar', data: { title: 'EmployeeDashBoardComponent' } },
    { path: 'employee-room-booking-component', component: EmployeeRoomBookingComponent,  outlet: 'nav-bar', data: { title: 'EmployeeRoomBookingComponent' } },
    { path: 'employee-room-details-component', component: EmployeeRoomDetailsComponent,  outlet: 'nav-bar', data: { title: 'EmployeeRoomDetailsComponent' } }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    SideNavBarComponent,
    EmployeeDashBoardComponent,
    EmployeeApplyLeaveComponent,
    EmployeeRoomDetailsComponent,
    EmployeeRoomBookingComponent,
    AdminNavBarComponent,
    AdminCreateUserComponent,
    AdminCreateRoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    CustomMaterialModule,
  ],
  exports: [RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
