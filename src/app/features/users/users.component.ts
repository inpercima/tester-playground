import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { UsersService } from './users.service';
import { User } from './user.model';

@Component({
  selector: 'hw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dataSource = new MatTableDataSource<User>();

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'zipcode'];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
    });
  }

}
