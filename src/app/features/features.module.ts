import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  exports: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
  ],
})
export class FeaturesModule { }
