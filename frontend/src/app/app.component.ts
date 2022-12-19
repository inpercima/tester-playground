import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LaunchesQuery, MissionQuery, TripsBookedSubscription } from 'src/graphql/graphql';

import { environment } from '../environments/environment';
import { CodegenService } from './service/codegen.service';
import { SimpleService } from './service/simple.service';

@Component({
  selector: 'aag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public appname: string;

  launchesSimple: any[] = [];
  launchesCodegen!: any[];
  missionSimple: any = '';
  missionCodegen!: MissionQuery['launch'];
  tripsBookedSimple: number = 0;
  tripsBookedCodegen: TripsBookedSubscription['tripsBooked'];

  /**
   * Adds the custom theme to the app root.
   * For overlays the OverlayContainer like in the constructor is used.
   * For dialogs the panelClass of the configuration must added manually like
   *
   * const dialogConfig = new MatDialogConfig();
   * dialogConfig.panelClass = `${environment.theme}-theme`;
   */
  @HostBinding('class') class = `${environment.theme}-theme`;

  public constructor(private titleService: Title, public overlayContainer: OverlayContainer,
    private codegenService: CodegenService, private simpleService: SimpleService) {
    this.appname = environment.appname;
    this.titleService.setTitle(this.appname);
    this.overlayContainer.getContainerElement().classList.add(`${environment.theme}-theme`);
  }

  ngOnInit(): void {
    this.simpleService.getLaunches().subscribe(launches => this.launchesSimple = launches.launches);
    this.simpleService.getTripsBooked().subscribe(tripsBooked => this.tripsBookedSimple = tripsBooked);
    this.codegenService.getLaunches().subscribe(launches => this.launchesCodegen = launches.launches);
    this.codegenService.getTripsBooked().subscribe(tripsBooked => this.tripsBookedCodegen = tripsBooked);
  }

  getMission(): void {
    this.simpleService.getMission('93').subscribe(launch => this.missionSimple = launch);
    this.codegenService.getMission('93').subscribe(launch => this.missionCodegen = launch);
  }
}
