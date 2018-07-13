import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewStoriesComponent } from './preview-stories.component';

describe('PreviewStoriesComponent', () => {
  let component: PreviewStoriesComponent;
  let fixture: ComponentFixture<PreviewStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
