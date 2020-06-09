import { Component } from '@angular/core';
import { UpdateService } from './services/update.service';
import { PushService } from './services/push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SuperApp';

  constructor(private push: PushService) {
  }

  ngOnInit() {
    this.push.subscribeToNotification();
  }
}
