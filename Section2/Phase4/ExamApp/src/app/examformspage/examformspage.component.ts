import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-examformspage',
  templateUrl: './examformspage.component.html',
  styleUrls: ['./examformspage.component.css']
})
export class ExamformspageComponent implements OnInit {

  myForm:FormGroup;
  radioinput: any; 
  constructor(public form:FormBuilder) {    // build form dynamically creating DI
      this.myForm=form.group({});
      
   }
   // life cycle method this will call after constructor 
  ngOnInit(): void {
    this.allQuestion.forEach(q=> {
        this.myForm?.addControl(q.question,this.form.control(""));
                                //user:new FormControl();
                                //q.question
    })
  }

  score=0;
  answer1:any;
  answer2:any;
  answer3:any;
  answer4:any;
  answer5:any;

  submit(){

    this.score = 0;

    this.allQuestion.forEach(q => { 
      
      console.log(this.answer2);
      console.log(q.correctAns);

      if('5*5' == q.question)
      {
        if(q.correctAns == this.answer1)
        {
          this.score++;

          console.log(q.correctAns);
          console.log(q.question);
          console.log(this.answer1);

        }
        
      }
      if('2*5' == q.question)
      {
        if(q.correctAns == this.answer2)
        {
          this.score++;
          console.log(q.correctAns);
          console.log(q.question);
          console.log(this.answer2);
        }
      }
      if('7*5' == q.question)
      {
        if(q.correctAns == this.answer3)
        {
          this.score++;
          console.log(q.correctAns);
          console.log(q.question);
          console.log(this.answer3);
        }
      }
      if('9*5' == q.question)
      {
        if(q.correctAns == this.answer4)
        {
          this.score++;
          console.log(q.correctAns);
          console.log(q.question);
          console.log(this.answer4);
        }
      }
      if('10*5' == q.question)
      {
        if(q.correctAns == this.answer5)
        {
          this.score++;
          console.log(q.correctAns);
          console.log(q.question);
          console.log(this.answer5);
        }
      }

      });

    this.myForm.disable();

    this.score = (this.score/5)*100;

    var x = document.getElementById("scorediv");
    if(x?.style.display == 'none')
    {
      x.style.display = "block";
    }
    
  }

  buttonchanged(event: any, element: any, questionnm:any){

    

    if('5*5' == questionnm)
    {
      this.answer1= element;
    }
    if('2*5' == questionnm)
    {
      this.answer2= element;
    }
    if('7*5' == questionnm)
    {
      this.answer3= element;
    }
    if('9*5' == questionnm)
    {
      this.answer4= element;
    }
    if('10*5' == questionnm)
    {
      this.answer5= element;
    }



    
  
  }

  allQuestion=[
    {question:"5*5",ans1:"25",ans2:"10",ans3:"20",ans4:"15",correctAns:"25"},
    {question:"2*5",ans1:"10",ans2:"15",ans3:"5",ans4:"20",correctAns:"10"},
    {question:"7*5",ans1:"30",ans2:"35",ans3:"40",ans4:"25",correctAns:"35"},
    {question:"9*5",ans1:"40",ans2:"45",ans3:"15",ans4:"25",correctAns:"45"},
    {question:"10*5",ans1:"55",ans2:"60",ans3:"50",ans4:"65",correctAns:"50"}
  ]
}
