import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../service/story.service';
import {PreviewStory} from '../../entity/PreviewStory';

@Component({
  selector: 'app-preview-stories',
  templateUrl: './preview-stories.component.html',
  styleUrls: ['./preview-stories.component.css']
})
export class PreviewStoriesComponent implements OnInit {

  previewStories: PreviewStory[] = [];

  constructor(
    private storyService: StoryService
  ) { }

  ngOnInit() {
    this.retrievePreviewStories();
  }

  public retrievePreviewStories() {
    this.storyService.retrievePreviewStories()
      .then((stories) => {
        this.previewStories = [];
        for (let i = 0; i < stories.length; i++) {
          this.previewStories.push(new PreviewStory(stories[i]._id, stories[i].title));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openStory(id: string){

  }
}
