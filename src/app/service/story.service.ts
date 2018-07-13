import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UploadStory} from '../entity/UploadStory';
import {environment} from '../../environments/environment';
import {UserService} from './user.service';

@Injectable()
export class StoryService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
  }

  uploadStory(model: UploadStory): Promise<any> {
    let formData: FormData = model.formData;
    let accessTokenValue = this.userService.getAuthenticationTokenFromStorage().token.access_token;

    if (accessTokenValue != undefined && accessTokenValue !== null && accessTokenValue !== '') {
      formData.append('accessTokenValue', accessTokenValue);

      return this.http.post(
        environment.restBaseUrl + '/story/upload',
        model.formData
      )
        .toPromise();
    } else {
      return new Promise<any>(() => "No Access Token Value");
    }
  }

  retrievePreviewStories(): Promise<any>{
    return this.http.get(environment.restBaseUrl + "/story/preview")
      .toPromise()
  }
}
