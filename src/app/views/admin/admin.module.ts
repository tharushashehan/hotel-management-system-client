import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminRoomCreateComponent } from './rooms/admin-room-create.component';
import { AdminUserCreateComponent } from './users/admin-user-create.component';

// Buttons Routing
import { AdminRoutingModule } from './admin-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    AdminRoomCreateComponent,
    AdminUserCreateComponent
  ]
})
export class AdminModule { }
