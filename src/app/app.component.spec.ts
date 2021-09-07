import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {UsersComponent} from "./features/users/users.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./shared/material/material.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent,UsersComponent ],
      imports: [
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],

    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as appname 'Angular jest cypress'`, () => {
    expect(component.appname).toEqual('Angular jest cypress');
  });

  it('should render toolbar', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Angular jest cypress');
  });
});
