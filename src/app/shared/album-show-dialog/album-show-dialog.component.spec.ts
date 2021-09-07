import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumShowDialogComponent } from './album-show-dialog.component';
import { MaterialModule } from '../material/material.module';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

describe('AlbumShowDialogComponent', () => {
  let component: AlbumShowDialogComponent;
  let fixture: ComponentFixture<AlbumShowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumShowDialogComponent ],
      imports: [
        MaterialModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumShowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
