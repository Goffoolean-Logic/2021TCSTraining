import { Component, OnInit } from '@angular/core';
import { TaskService } from '../Taskdataservice';
import { Taskstorage } from '../taskstorage.model';

@Component({
  selector: 'app-tasker-component',
  templateUrl: './tasker-component.component.html',
  styleUrls: ['./tasker-component.component.css']
})
export class TaskerComponentComponent implements OnInit {
  
  TaskData:Array<Taskstorage>=[];
  flag:boolean = false;
  constructor(public task:TaskService) { }

  ngOnInit(): void {
  }
  callService() {
    this.flag = true;
    this.task.loadTaskJsonData().subscribe(data=>this.TaskData=data,
      error=>console.log(error),()=>console.log("completed"))
  }
}
