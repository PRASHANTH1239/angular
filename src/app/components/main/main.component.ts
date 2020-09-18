import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
mainText="Testing";
registrationForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      phoneNumber:['',Validators.required],
      address:''
    })
  }
  save(){
    console.log(this.registrationForm.value)
  }

}
