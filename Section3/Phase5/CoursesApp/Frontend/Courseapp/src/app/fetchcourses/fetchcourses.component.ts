import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CourseService } from '../course.service';
import {Course} from '../course'

@Component({
  selector: 'app-fetchcourses',
  templateUrl: './fetchcourses.component.html',
  styleUrls: ['./fetchcourses.component.css']
})
export class FetchcoursesComponent implements OnInit {


  Fetch:Array<Course>=[];

  constructor(public courseSer:CourseService) { 
  }
  ngOnInit(): void {
    this.FetchCoursesL();
  }

  FetchCoursesL()
  {
    this.courseSer.FetchCourses().subscribe(result=> {
      this.Fetch=result},error=>console.log(error));
    }
}
