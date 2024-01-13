import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UsersService } from '../../core/users.service';
import { AlbumCreateDialogComponent } from '../../shared/album-create-dialog/album-create-dialog.component';
import { AlbumShowDialogComponent } from '../../shared/album-show-dialog/album-show-dialog.component';
import { User } from '../../shared/user.model';

@Component({
  selector: 'tajc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: true,
  imports: [NgIf, MatCardModule, MatTableModule, MatButtonModule, MatIconModule, MatDialogModule],
})
export class UsersComponent implements OnInit {
  dataSource = new MatTableDataSource<User>();

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'city', 'zipcode', 'street', 'suite', 'functions'];

  constructor(public dialog: MatDialog, private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.listUsers().subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  showAlbums(userId: number): void {
    const dialogRef = this.dialog.open(AlbumShowDialogComponent, {
      height: '800px',
      width: '1200px',
      data: {
        userId,
      },
    });
  }

  createAlbum(userId: number): void {
    const dialogRef = this.dialog.open(AlbumCreateDialogComponent, {
      data: {
        userId,
      },
    });
  }
}
