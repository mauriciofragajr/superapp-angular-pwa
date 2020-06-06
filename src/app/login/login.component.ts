import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLogin: boolean = true;
  token: string;
  jwt: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJqb3NlZmoiLCJjb21wYW55TmFtZSI6IklwaXJhbmdhIiwiY29zdENlbnRlciI6IjA3NzIwNyIsImRvY3VtZW50IjoiMTMzMDY2MjQ3NDgiLCJuYW1lIjoiSm9zZSBNYXVyaWNpbyBSaWJlaXJvIEZyYWdhIEp1bmlvciIsImF1ZCI6InRyaXBwLmdhcmFnZW1kaWdpdGFsLmlvIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmdhcmFnZW1kaWdpdGFsLmlvIiwiZXhwIjoxNTkxNDE0MjQzLCJpYXQiOjE1OTE0MTA2NDN9.CW0MqkaAzguDPjkKKvXXAy8tLVIeF7oHV0j9xZWQzPGDbHsoVF_HsSoUDG-6VBu6LvA8ZlBy4V76T2WLIuLqS9bJHXVWeVXg0mgPnLg2xrY8Zj4B9ucODOZZw7LcUEH8QNQoOpHYuYV1Oa9BwfK-jWkyG0wV8Q8jHnVNtZ_luCCDcoYxE8G6LnSlqCIDPHUvcl1rHjztLSFBCsqiToKADW0vZbqb0Kb0niWW2S2eSVTeMFfrMmOxiZSU3O2-PaK5xmTDW_0N0pCxCHbOJt9RrCqfjKzhDDWSnIFDOsxDSTlPgUB2c-ETqRNrcSkIWwFZXjrK2gKYb_6KzuMLg9b2mw';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public authService: AuthService) {
    this.token = this.activatedRoute.snapshot.queryParamMap.get('token');
    if (this.token) {
      this.authService.login(this.token);
    }
    this.authService.currentUser.subscribe(user => {
      if (user) this.showLogin = false;
      else this.showLogin = true;
    })
  }

  ngOnInit(): void {
  }
}