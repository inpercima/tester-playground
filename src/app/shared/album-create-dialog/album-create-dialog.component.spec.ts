import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AlbumCreateDialogComponent } from './album-create-dialog.component';
import { MaterialModule } from '../material/material.module';

describe('AlbumCreateDialogComponent', () => {
  let component: AlbumCreateDialogComponent;
  let fixture: ComponentFixture<AlbumCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumCreateDialogComponent ],
      imports: [
        FormsModule,
        MaterialModule,
      ],
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
