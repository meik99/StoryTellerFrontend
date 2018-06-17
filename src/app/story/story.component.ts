import {Component, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../service/user.service';
import {UploadStory} from '../entity/UploadStory';
import {LoginService} from '../service/login.service';
import {StoryService} from '../service/story.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  private _uploadFormShown = false;
  private _model = new UploadStory();
  private _isAdmin = false;

  constructor(
    private loginService: LoginService,
    private storyService: StoryService,
    private router: Router
  ) { }


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

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }

  ngOnInit() {
    this.loginService.isAdmin()
      .then(result => {
        this.isAdmin = result;
        if(result == false){
          this.router.navigateByUrl("/");
        }
      })
      .catch(error => console.log(error));
  }

  toggleUploadForm() {
    this.uploadFormShown = !this.uploadFormShown;
  }

  uploadStory() {  }

  isInvalid() {
    return !this.isValid();
  }

  isValid(){
    return this.model.title !== null && this.model.title !== undefined && this.model.title.length > 0;
  }
}
