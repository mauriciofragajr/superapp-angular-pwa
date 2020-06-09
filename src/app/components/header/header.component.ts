import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PushService } from 'src/app/services/push.service';
import { AddToHomeScreenService } from 'src/app/services/add-to-home-screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;

  constructor(public authService: AuthService, public pushService: PushService, public addToHomeScreenService: AddToHomeScreenService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      if (user) this.isLogged = true;
      else this.isLogged = false;
    })
  }

}
