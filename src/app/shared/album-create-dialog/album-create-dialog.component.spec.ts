import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCreateDialogComponent } from './album-create-dialog.component';

describe('AlbumCreateDialogComponent', () => {
  let component: AlbumCreateDialogComponent;
  let fixture: ComponentFixture<AlbumCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumCreateDialogComponent ]
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
