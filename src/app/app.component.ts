import {Component, OnInit} from '@angular/core';
import {LoginService} from './service/login.service';
import {UserService} from './service/user.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  code = null;
  localStorage = localStorage;

  constructor(
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    if (this.code == null) {
      this.activatedRoute.queryParams.subscribe(params => {
        this.code = params["code"];
        if (this.code !== undefined) {
          this.loginService.loginOAuth(this.code);
        }
      });
    }
  }

  login(): void {
    // this.userService.getUser()
    //   .then(value => console.log(value));
    if (this.code == null) {
      this.loginService.getAuthenticationCode();
    }
  }

  hasAccessToken(): boolean {
    return localStorage.getItem('accessToken') !== undefined;
  }
}
