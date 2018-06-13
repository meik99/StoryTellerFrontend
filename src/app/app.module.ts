import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from './main/main.component';
import {LoginService} from './service/login.service';
import {HttpClientModule} from '@angular/common/http';
import { StoryComponent } from './story/story.component';
import {UserService} from './service/user.service';

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "story",
    component: StoryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
