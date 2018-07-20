import {Component, OnInit, SecurityContext} from '@angular/core';
import {StoryService} from '../../service/story.service';
import {PreviewStory} from '../../entity/PreviewStory';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-preview-stories',
  templateUrl: './preview-stories.component.html',
  styleUrls: ['./preview-stories.component.css']
})
export class PreviewStoriesComponent implements OnInit {

  previewStories: PreviewStory[] = [];

  constructor(
    private storyService: StoryService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.retrievePreviewStories();
  }

  public retrievePreviewStories() {
    this.storyService.retrievePreviewStories()
      .then((stories) => {
        this.previewStories = [];
        for (let i = 0; i < stories.length; i++) {
          this.previewStories.push(new PreviewStory(this.sanitizer.sanitize(SecurityContext.HTML, stories[i]._id), this.sanitizer.sanitize(SecurityContext.HTML, stories[i].title)));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openStory(id: string){
    this.router.navigate(["/read-story"], {queryParams: {id: id}})
  }
}
