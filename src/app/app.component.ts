import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '../environments/environment';
import { UsersComponent } from './features/users/users.component';

@Component({
  selector: 'tajc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MatToolbarModule, UsersComponent],
})
export class AppComponent {
  public appname: string;

  // Adds the custom theme to the app root.
  @HostBinding('class') class = `${environment.theme}-theme`;

  public constructor(private titleService: Title, public overlayContainer: OverlayContainer) {
    this.appname = environment.appname;
    this.titleService.setTitle(this.appname);
    // Adds the custom theme to dialogs.
    this.overlayContainer.getContainerElement().classList.add(`${environment.theme}-theme`);
  }
}
