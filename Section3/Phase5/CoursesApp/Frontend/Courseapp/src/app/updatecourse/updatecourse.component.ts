import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {

  courseRef = new FormGroup({
    id:new FormControl(),
    amount:new FormControl()
  })
  constructor(public courseSer:CourseService) { }
  msg?:string;
  ngOnInit(): void {
  }

  UpdateCourse() {
    let update = this.courseRef.value;
 
    this.courseSer.UpdateCourse(update.id, update.amount).subscribe(result=>this.msg=result,error=>console.log(error));
 
    this.courseRef.reset();
  }


}
