import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PushService } from 'src/app/services/push.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isLogged: boolean = false;

  constructor(public authService: AuthService, public pushService: PushService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      if (user) this.isLogged = true;
      else this.isLogged = false;
    })
  }
}
