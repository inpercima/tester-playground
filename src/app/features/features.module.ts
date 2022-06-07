import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { environment } from 'src/environments/environment';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = environment.mqtt;

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ]
})
export class FeaturesModule { }
