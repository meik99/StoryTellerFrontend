import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UploadStory} from '../entity/UploadStory';
import {environment} from '../../environments/environment';

@Injectable()
export class StoryService {

  constructor(
    private http: HttpClient
  ) { }

  uploadStory(model: UploadStory): Promise<any>{
    return this.http.post(
      environment.restBaseUrl + "/story",
      {
        title: model.title,
        file: model.file,
        token: localStorage.getItem(environment.storageKeyToken)
      })
      .toPromise();
  }
}
