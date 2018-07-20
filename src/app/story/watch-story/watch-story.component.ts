import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {StoryService} from '../../service/story.service';

@Component({
  selector: 'app-watch-story',
  templateUrl: './watch-story.component.html',
  styleUrls: ['./watch-story.component.css']
})
export class WatchStoryComponent implements OnInit {
  private _id: string = null;

  constructor(
    private storyService: StoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this._id = params["id"];
      });
  }

}
