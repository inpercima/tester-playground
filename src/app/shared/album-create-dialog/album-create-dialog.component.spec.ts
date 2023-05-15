import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlbumCreateDialogComponent } from './album-create-dialog.component';

describe('AlbumCreateDialogComponent', () => {
  let component: AlbumCreateDialogComponent;
  let fixture: ComponentFixture<AlbumCreateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, BrowserAnimationsModule, AlbumCreateDialogComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    });
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
