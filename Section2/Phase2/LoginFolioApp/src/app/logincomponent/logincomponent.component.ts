import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });
  msg:string=""
    constructor(public router:Router) { } //DI
  ngOnInit(): void {
  }

  checkUser(){
    let login = this.loginRef.value;

    if(login.user=="Caleb" && login.pass=="123"){
          this.router.navigate(["Portfolio"]);  // appended name through path
    } else {
        this.msg  = "InValid username or password";
    }
    this.loginRef.reset();   
  }
}
