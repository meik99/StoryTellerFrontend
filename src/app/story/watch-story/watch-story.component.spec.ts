import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchStoryComponent } from './watch-story.component';

describe('WatchStoryComponent', () => {
  let component: WatchStoryComponent;
  let fixture: ComponentFixture<WatchStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
