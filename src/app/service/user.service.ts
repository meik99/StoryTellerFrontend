import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const BASE_URL = "http://localhost:3000";

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Promise<any> {
    return this.http.get(BASE_URL + "/user/")
      .toPromise();
  }

}
