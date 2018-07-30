import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {StoryService} from '../../service/story.service';
import {Story} from '../../entity/Story';

@Component({
  selector: 'app-watch-story',
  templateUrl: './watch-story.component.html',
  styleUrls: ['./watch-story.component.css']
})
export class WatchStoryComponent implements OnInit {
  private _id: string = null;
  private _story: Story = null;


  get story(): Story {
    return this._story;
  }

  set story(value: Story) {
    this._story = value;
  }

  constructor(
    private storyService: StoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this._id = params['id'];
        this.storyService.getFullStory(this._id)
          .then(story => {
            this.story = new Story(story.title, story.description, story.messages);

            console.log(this.story)
          })
          .catch(error => console.log(error));
      });
  }

}
