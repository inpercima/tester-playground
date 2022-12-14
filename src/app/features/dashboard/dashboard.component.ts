import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amqtt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;
  public message!: string;

  constructor(private mqttService: MqttService) {}

  ngOnInit(): void {
    this.subscription = this.mqttService.observe(environment.mqtt.topic).subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
