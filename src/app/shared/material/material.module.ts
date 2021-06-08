import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatCardModule,
    MatTableModule,
  ],
  exports: [
    MatCardModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
