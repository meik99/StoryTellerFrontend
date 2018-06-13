import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const BASE_URL = "http://localhost:3000";


@Injectable()
export class LoginService {


  constructor(
    private http: HttpClient
  ) { }

  getAuthenticationCode(): any {
    const authUrl = "https://accounts.google.com/o/oauth2/auth?";
    const clientId = "&client_id=" + "247770173113-ffpvo1q7kvm44smhhbo5c3e4hf1qvq5l.apps.googleusercontent.com";
    const scope = "&scope=profile";
    const accessType = "&access_type=offline";
    const redirectUri = "&redirect_uri=http://localhost:4200";
    const responseType = "&response_type=code";
    const uri = encodeURI(authUrl + clientId + scope + accessType + redirectUri + responseType);

    location.href = uri;
  }

  loginOAuth(code: String) {
    this.http
      .get(encodeURI(BASE_URL + "/user/loginOAuth?code=" + code))
      .toPromise()
      .then((result) => {
          localStorage.setItem("accessToken", JSON.stringify(result));

          location.href = "/story";
      })
      .catch(error => console.log(error));
  }
}
