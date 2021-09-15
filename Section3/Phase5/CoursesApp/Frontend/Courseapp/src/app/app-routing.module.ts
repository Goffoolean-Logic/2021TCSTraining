import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { DeletecourseComponent } from './deletecourse/deletecourse.component';
import { FetchcoursesComponent } from './fetchcourses/fetchcourses.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';

const routes: Routes = [
  {path:"addC",component:AddcourseComponent},
  {path:"updateC",component:UpdatecourseComponent},
  {path:"deleteC",component:DeletecourseComponent},
  {path:"fetchC",component:FetchcoursesComponent},
  {path:"indexC",component:IndexpageComponent},
  {path:"",redirectTo:"indexC",pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
