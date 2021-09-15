import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public http:HttpClient) { }

  AddCourse(course:Course):Observable<any>{
    return this.http.post("http://localhost:9090/api/course/storeCourse",course,
    {responseType:'text'});
  }

  UpdateCourse(cid:any, amount: any):Observable<any>{
    return this.http.put("http://localhost:9090/api/course/updateCourse",{cid:cid,amount:amount} ,
    {responseType:'text'});

  }

  deleteCourse(cid:any):Observable<any>{
    return this.http.delete<any>("http://localhost:9090/api/course/deleteCourse/" + cid);

  }

  FetchCourses():Observable<Course[]>{
    return this.http.get<Course[]>("http://localhost:9090/api/course/getAllCourses");
  }

}
