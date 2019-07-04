import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminRoomCreateComponent } from './rooms/admin-room-create.component';
import { AdminUserCreateComponent } from './users/admin-user-create.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        data: {
          title: 'dashboard'
        }
      }
    ]
  },
  {
    path: 'rooms',
    data: {
      title: 'Rooms'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: AdminComponent,
        data: {
          title: 'dashboard'
        }
      },
      {
        path: 'create',
        component: AdminRoomCreateComponent,
        data: {
          title: 'Create room'
        }
      }
    ]
  },
  {
    path: 'users',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: AdminComponent,
        data: {
          title: 'dashboard'
        }
      },
      {
        path: 'create',
        component: AdminUserCreateComponent,
        data: {
          title: 'Create user'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
