import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const BASE_URL = "http://localhost:3000";

@Injectable()
export class UserService {

  constructor(

  ) { }

  getAuthenticationTokenFromStorage(){
    let token = localStorage.getItem(environment.storageKeyToken);

    if(token == undefined || token === null || token === ""){
      localStorage.removeItem(environment.storageKeyToken);
      return null;
    }

    return JSON.parse(localStorage.getItem(environment.storageKeyToken));
  }
}
