import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumShowDialogComponent } from './album-show-dialog.component';

describe('AlbumShowDialogComponent', () => {
  let component: AlbumShowDialogComponent;
  let fixture: ComponentFixture<AlbumShowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumShowDialogComponent ]
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
