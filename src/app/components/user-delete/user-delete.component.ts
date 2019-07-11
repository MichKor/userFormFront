import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_shered/services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  public id: string;
  public response: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.delete(this.id)
      .subscribe((response) => {
        this.response = response;
      });
  }
}
