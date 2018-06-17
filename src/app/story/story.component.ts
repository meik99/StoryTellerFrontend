import {Component, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../service/user.service';
import {UploadStory} from '../entity/UploadStory';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  private _uploadFormShown = true;
  private _model = new UploadStory();


  get model(): UploadStory {
    return this._model;
  }

  set model(value: UploadStory) {
    this._model = value;
  }

  set uploadFormShown(uploadFormShown: boolean){
    this._uploadFormShown = uploadFormShown;
  }

  get uploadFormShown(): boolean{
    return this._uploadFormShown;
  }

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  isAdmin(): boolean{
    return this.loginService.isAdmin();
  }

  toggleUploadForm() {
    this.uploadFormShown = !this.uploadFormShown;
  }

  uploadStory() {
    console.log(this.model);
  }

  isInvalid() {
    return !this.isValid();
  }

  isValid(){
    return this.model.title !== null && this.model.title !== undefined && this.model.title.length > 0;
  }
}
