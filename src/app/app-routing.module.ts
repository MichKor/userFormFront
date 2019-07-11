import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserDeleteComponent} from './components/user-delete/user-delete.component';
import {UserCreateComponent} from './components/user-create/user-create.component';

const routes: Routes = [
  {
    path: 'user/:id', component: UserComponent
  },
  {
    path: '', component: UserListComponent
  },
  {
    path: 'deleteUser/:id', component: UserDeleteComponent
  },
  {
    path: 'createUser', component: UserCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
