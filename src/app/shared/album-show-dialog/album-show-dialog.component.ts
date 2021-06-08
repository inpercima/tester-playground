import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Album } from '../album.model';
import { Photo } from '../photo.model';
import { UsersService } from 'src/app/core/users.service';

@Component({
  selector: 'hw-album',
  templateUrl: './album-show-dialog.component.html',
})
export class AlbumShowDialogComponent implements OnInit {

  albums: Album[] = [];

  photos: Photo[] = [];

  constructor(private userService: UsersService, @Inject(MAT_DIALOG_DATA) public data: { userId: number }) { }

  ngOnInit(): void {
    this.userService.listAlbums(this.data.userId).subscribe(albums => this.albums = albums);
  }

  expand(albumId: number): void {
    this.photos = [];
    this.userService.listPhotos(albumId).subscribe(photos => this.photos = photos);
  }
}
