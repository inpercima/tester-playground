import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { UsersService } from 'src/app/core/users.service';
import { AlbumShowDialogComponent } from 'src/app/shared/album-show-dialog/album-show-dialog.component';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'hw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dataSource = new MatTableDataSource<User>();

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'city', 'zipcode', 'street', 'suite', 'functions'];

  constructor(public dialog: MatDialog, private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  showAlbums(userId: number): void {
    const dialogRef = this.dialog.open(AlbumShowDialogComponent, {
      height: '800px',
      width: '1200px',
      data: {
        userId,
      }
    });
  }

  createAlbum(userId: number): void {

  }
}
