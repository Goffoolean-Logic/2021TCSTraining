import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { DeletecourseComponent } from './deletecourse/deletecourse.component';
import { FetchcoursesComponent } from './fetchcourses/fetchcourses.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    UpdatecourseComponent,
    DeletecourseComponent,
    FetchcoursesComponent,
    IndexpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
