import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserService} from '../service/user.service';
import {UploadStory} from '../entity/UploadStory';
import {LoginService} from '../service/login.service';
import {StoryService} from '../service/story.service';
import {Router} from '@angular/router';
import {PreviewStory} from '../entity/PreviewStory';
import {environment} from '../../environments/environment.prod';
import {PreviewStoriesComponent} from './preview-stories/preview-stories.component';


const UPLOAD_SUCCESS_TIMEOUT = 5000;

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @ViewChild("fileInput")
  inputForm: ElementRef;
  @ViewChild(PreviewStoriesComponent)
  private previewStoriesComponent: PreviewStoriesComponent;


  private _uploadFormShown = false;
  private _model = new UploadStory();

  private _isAdmin = false;

  private _uploadSuccess: boolean = undefined;


  constructor(
    private loginService: LoginService,
    private storyService: StoryService,
    private router: Router
  ) { }

  get uploadSuccess(): boolean {
    return this._uploadSuccess;
  }

  set uploadSuccess(value: boolean) {
    setTimeout(() => this._uploadSuccess = undefined, UPLOAD_SUCCESS_TIMEOUT);
    this._uploadSuccess = value;
  }

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
          localStorage.removeItem(environment.storageKeyToken);
          this.router.navigateByUrl("/");
        }
      })
      .catch(error => console.log(error));
  }

  toggleUploadForm() {
    this.uploadFormShown = !this.uploadFormShown;
  }

  /**
   * Is executed on upload-button click
    */
  uploadStory() {
    let inputFormElement: HTMLInputElement = this.inputForm.nativeElement;
    let fileCount: number = inputFormElement.files.length;
    let formData = new FormData();

    if(fileCount > 0){
      formData.append("file", inputFormElement.files.item(0));
      formData.append("title", this.model.title);

      this.model.formData = formData;
    }

    this.storyService
      .uploadStory(this.model)
      .then((result) => {
        this.uploadSuccess = result.status === "200";
        this.previewStoriesComponent.retrievePreviewStories();
      })
      .catch((error) => {
        console.log(error);
        this.uploadSuccess = false;
      });
  }

  isInvalid() {
    return !this.isValid();
  }

  isValid(){
    return this.model.title !== null && this.model.title !== undefined && this.model.title.length > 0;
  }
}
