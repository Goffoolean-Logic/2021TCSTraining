import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  courseRef = new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    desc:new FormControl(),
    amount:new FormControl()
  })
  constructor(public courseSer:CourseService) { }
  msg?:string;
  ngOnInit(): void {
  }

  AddCourse() {
    let add = this.courseRef.value;
 
    this.courseSer.AddCourse(add).subscribe(result=>this.msg=result,error=>console.log(error));
 
    this.courseRef.reset();
  }

}
