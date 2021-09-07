import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UsersService } from '../../core/users.service';
import { MaterialModule } from '../../shared/material/material.module';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let service: UsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        MaterialModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UsersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
