import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MissionQuery, TripsBookedSubscription } from 'src/graphql/graphql';

import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '../environments/environment';
import { CodegenService } from './service/codegen.service';
import { SimpleService } from './service/simple.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'aag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MatToolbarModule],
})
export class AppComponent implements OnInit {
  public appname: string;

  launchesSimple: any[] = [];
  launchesCodegen!: any[];
  missionSimple: any = '';
  missionCodegen!: MissionQuery['launch'];
  tripsBookedSimple: number = 0;
  tripsBookedCodegen: TripsBookedSubscription['tripsBooked'];

  public constructor(
    @Inject(DOCUMENT) private document: Document,
    private titleService: Title,
    private codegenService: CodegenService,
    private simpleService: SimpleService
  ) {
    this.appname = environment.appname;
    this.titleService.setTitle(this.appname);
  }

  ngOnInit(): void {
    this.document.body.classList.add(`${environment.theme}-theme`);
    this.simpleService.getLaunches().subscribe((launches) => (this.launchesSimple = launches.launches));
    this.simpleService.getTripsBooked().subscribe((tripsBooked) => (this.tripsBookedSimple = tripsBooked));
    this.codegenService.getLaunches().subscribe((launches) => (this.launchesCodegen = launches.launches));
    this.codegenService.getTripsBooked().subscribe((tripsBooked) => (this.tripsBookedCodegen = tripsBooked));
  }

  getMission(): void {
    this.simpleService.getMission('93').subscribe((launch) => (this.missionSimple = launch));
    this.codegenService.getMission('93').subscribe((launch) => (this.missionCodegen = launch));
  }
}
