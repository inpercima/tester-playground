import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { UsersService } from '../../core/users.service';
import { Album } from '../album.model';
import { Photo } from '../photo.model';

@Component({
  selector: 'hw-album',
  templateUrl: './album-show-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, NgIf, MatExpansionModule, NgFor, MatButtonModule],
})
export class AlbumShowDialogComponent implements OnInit {
  albums: Album[] = [];

  photos: Photo[] = [];

  constructor(private userService: UsersService, @Inject(MAT_DIALOG_DATA) public data: { userId: number }) {}

  ngOnInit(): void {
    this.userService.listAlbums(this.data.userId).subscribe((albums) => (this.albums = albums));
  }

  expand(albumId: number): void {
    this.photos = [];
    this.userService.listPhotos(albumId).subscribe((photos) => (this.photos = photos));
  }
}
