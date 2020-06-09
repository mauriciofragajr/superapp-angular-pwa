import { Component } from '@angular/core';
import { UpdateService } from './services/update.service';
import { PushService } from './services/push.service';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SuperApp';

  constructor(private update: UpdateService, private push: PushService, private geolocation: GeolocationService) { }

  ngOnInit() {
    this.push.subscribeToNotification();
  }
}
