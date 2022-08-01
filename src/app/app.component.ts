import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MissionQuery, MissionsQuery } from 'src/graphql/graphql';

import { environment } from '../environments/environment';
import { MissionCodegenService } from './service/mission-codegen.service';
import { MissionSimpleService } from './service/mission-simple.service';

@Component({
  selector: 'aag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public appname: string;
  missionsSimple: any[] = [];
  missionsCodegen!: MissionsQuery['missions'];
  missionSimple: any;
  missionCodegen!: MissionQuery['mission'];

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
    private missionCodegenService: MissionCodegenService, private missionSimpleService: MissionSimpleService) {
    this.appname = environment.appname;
    this.titleService.setTitle(this.appname);
    this.overlayContainer.getContainerElement().classList.add(`${environment.theme}-theme`);
  }

  ngOnInit(): void {
    this.missionSimpleService.getMissions().subscribe((missions) => (this.missionsSimple = missions));
    this.missionCodegenService.getMissions().subscribe((missions) => (this.missionsCodegen = missions));
  }

  getMission(): void {
    this.missionSimpleService.getMission('F7709F2').subscribe((mission) => (this.missionSimple = mission));
    this.missionCodegenService.getMission('F7709F2').subscribe((mission) => (this.missionCodegen = mission));
  }
}
