import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../../_shered/models/user.interface';
import {UserService} from '../../_shered/services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public id: string;
  public singleUser: UserInterface;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id)
      .subscribe((response: UserInterface) => {
        this.singleUser = response;
      });
  }
}
