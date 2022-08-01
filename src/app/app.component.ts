import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MissionQuery, MissionsQuery } from 'src/graphql/graphql';

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
    private codegenService: CodegenService, private simpleService: SimpleService) {
    this.appname = environment.appname;
    this.titleService.setTitle(this.appname);
    this.overlayContainer.getContainerElement().classList.add(`${environment.theme}-theme`);
  }

  ngOnInit(): void {
    this.simpleService.getMissions().subscribe((missions) => (this.missionsSimple = missions));
    this.simpleService.getUsers().subscribe((users) => (this.missionsSimple = users));
    this.codegenService.getMissions().subscribe((missions) => (this.missionsCodegen = missions));
    this.codegenService.getUsers().subscribe((users) => (this.missionsSimple = users));
  }

  getMission(): void {
    this.simpleService.getMission('F7709F2').subscribe((mission) => (this.missionSimple = mission));
    this.codegenService.getMission('F7709F2').subscribe((mission) => (this.missionCodegen = mission));
  }
}
