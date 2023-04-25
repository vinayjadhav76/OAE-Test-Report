import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGridComponent } from './user-grid/user-grid.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
    path: 'user-grid',
    component: UserGridComponent,
    data: {
      title: 'User List ',
      headerDisplay: "none"
    }
  },
  {
    path:'add-user',
    component: AddUserComponent,
  },
  {
    path:'update-user/:id',
    component:UpdateUserComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
