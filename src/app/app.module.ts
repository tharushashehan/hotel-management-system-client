import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatTableModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './servises/user.service';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavBarComponent } from './employee/side-nav-bar/side-nav-bar.component';
import { EmployeeDashBoardComponent } from './employee/employee-dash-board/employee-dash-board.component';
import { EmployeeApplyLeaveComponent } from './employee/employee-apply-leave/employee-apply-leave.component';
import { EmployeeRoomDetailsComponent } from './employee/employee-room-details/employee-room-details.component';
import { EmployeeRoomBookingComponent } from './employee/employee-room-booking/employee-room-booking.component';
import { RouterModule, Routes } from "@angular/router";
import { CustomMaterialModule } from "./material.module";
import { AdminNavBarComponent } from './admin/admin-nav-bar/admin-nav-bar.component';
import { AdminCreateUserComponent } from './admin/admin-create-user/admin-create-user.component';
import { AdminCreateRoomComponent } from './admin/admin-create-room/admin-create-room.component';
import { RouteDetails } from './app.route';


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
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      RouteDetails.appRoutes,
      { useHash: true }
    ),
    CustomMaterialModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [RouterModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
