import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-deletecourse',
  templateUrl: './deletecourse.component.html',
  styleUrls: ['./deletecourse.component.css']
})
export class DeletecourseComponent implements OnInit {

  courseRef = new FormGroup({
    id:new FormControl()
  })
  constructor(public courseSer:CourseService) { }
  msg?:string;
  ngOnInit(): void {
  }

  DeleteCourse() {
    let Delete = this.courseRef.value;
 
    this.courseSer.deleteCourse(Delete.id).subscribe(result=>this.msg=result,error=>console.log(error));
 
    this.courseRef.reset();
  }

}
