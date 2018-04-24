import {Component, OnInit} from '@angular/core';
import {LoginService} from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isLoggedIn = false;

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.checkLocalStorageIfLoggedIn();
    console.log(this.isLoggedIn);
  }

  login() {
    this.loginService
      .login()
      .then((value) => {
        localStorage.setItem("login", "true");
        this.isLoggedIn = true;
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
        localStorage.setItem("login", "false");
        this.isLoggedIn = false;
      });
  }

}
