import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  exports: [ UsersComponent ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class FeaturesModule { }
