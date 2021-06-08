import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { FeaturesModule } from './features/features.module';
import { AlbumCreateDialogComponent } from './shared/album-create-dialog/album-create-dialog.component';
import { AlbumShowDialogComponent } from './shared/album-show-dialog/album-show-dialog.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AlbumCreateDialogComponent,
    AlbumShowDialogComponent,
  ],
  imports: [
    /**
     * Sort first all angular and third-party modules and then own b/c sometimes some
     * dependnecies exits.
     */
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    OverlayModule,
    FeaturesModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
