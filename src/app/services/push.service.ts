import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  private readonly VAPID_PUBLIC_KEY = "BBqcZNxxmcERTtWwNmRUPvMTyxY1EHtfcGjgkbp9E_lqzhhe8clmEujlKztS-9Acdaa-3i_l2wBTRW2Vuno-wwU";

  constructor(private swPush: SwPush) {
    this.swPush.messages.subscribe((message) => {
      console.log(message);
    })

    this.swPush.notificationClicks.subscribe(({ action, notification }) => {
      console.log('click');
      window.open(notification.data.url);
      // fetch('') use fetch
    })
  }

  subscribeToNotification() {
    if (!this.swPush.isEnabled) {
      console.log('Notificarion is not enabled');
      return;
    }
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => console.log(JSON.stringify(sub)))
      .catch(err => console.error('Could not subscribe to notifications', err));
  }
}
