import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AlbumCreateDialogComponent } from './album-create-dialog.component';
import { MaterialModule } from '../material/material.module';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('AlbumCreateDialogComponent', () => {
  let component: AlbumCreateDialogComponent;
  let fixture: ComponentFixture<AlbumCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumCreateDialogComponent ],
      imports: [
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
