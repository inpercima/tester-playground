import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlbumShowDialogComponent } from './album-show-dialog.component';

describe('AlbumShowDialogComponent', () => {
  let component: AlbumShowDialogComponent;
  let fixture: ComponentFixture<AlbumShowDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserAnimationsModule, AlbumShowDialogComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    });
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
