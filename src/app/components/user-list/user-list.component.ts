import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../../_shered/models/user.interface';
import {UserService} from '../../_shered/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userList: UserInterface;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe((response: UserInterface) => {
        this.userList = response;
      });
  }
}
