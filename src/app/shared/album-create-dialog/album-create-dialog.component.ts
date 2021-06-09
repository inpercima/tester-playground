import { Component, Inject } from '@angular/core';

import { UsersService } from '../../core/users.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'hw-album-create-dialog',
  templateUrl: './album-create-dialog.component.html',
})
export class AlbumCreateDialogComponent {

  title = '';

  constructor(private snackBar: MatSnackBar, private userService: UsersService, @Inject(MAT_DIALOG_DATA) public data: { userId: number }) { }

  addAlbum(): void {
    this.userService.addAlbum(this.data.userId, this.title).subscribe(album => {
      this.snackBar.open(`Created Album '${album.title}'`, '', {
        duration: 5000,
      });
    })
  }
}
