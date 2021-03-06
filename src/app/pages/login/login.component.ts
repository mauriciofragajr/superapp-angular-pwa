import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLogin: boolean = true;
  token: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public authService: AuthService) {
    if (this.authService.getUser) this.router.navigate(['home']);

    this.token = this.activatedRoute.snapshot.queryParamMap.get('token');
    if (this.token) {
      this.authService.setUser(this.token);
    } else {
      this.authService.toLoginPage();
    }
  }

  ngOnInit(): void {
  }
}