import { Component, Inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UsersService } from '../../core/users.service';

@Component({
  selector: 'hw-album-create-dialog',
  templateUrl: './album-create-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSnackBarModule],
})
export class AlbumCreateDialogComponent {
  title = '';

  constructor(private snackBar: MatSnackBar, private userService: UsersService, @Inject(MAT_DIALOG_DATA) public data: { userId: number }) {}

  addAlbum(): void {
    this.userService.addAlbum(this.data.userId, this.title).subscribe((album) => {
      this.snackBar.open(`Created Album '${album.title}'`, '', {
        duration: 5000,
      });
    });
  }
}
