import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const BASE_URL = "http://localhost:3000";

@Injectable()
export class LoginService {


  constructor(
    private http: HttpClient
  ) { }

  login(): Promise<any> {
    return this.http
      .get(BASE_URL + "/login")
      .toPromise();
  }

  checkLocalStorageIfLoggedIn(): boolean {
    return localStorage.getItem("login") !== undefined &&
      localStorage.getItem("login") !== null &&
      localStorage.getItem("login") !== "false";
  }
}
