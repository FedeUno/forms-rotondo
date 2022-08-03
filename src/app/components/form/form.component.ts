import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



interface Student {
  name:string;
  lastname:string;
  note:number;
  email:string;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit  {
  contactForm!: FormGroup;

  students: Student[] = [
    {
      name:'Fede',
      lastname:'García',
      note:10,
      email:'fede@gmail.com'
    }
  ] 
/*   studentDelete: string = ''; */


  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      name: new FormControl ('', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{1,40}$/)]),
      lastname:new FormControl ('', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{1,40}$/)]),
      note: new FormControl ('', [Validators.required, Validators.pattern(/^\d{0,2}$/) ]),

      email: new FormControl ('fede@gmail.com', [Validators.required, Validators.email,  Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) ])
    })
    }
  ngOnInit():void{}

  sendContact(){
    console.log(this.contactForm)
    this.students.push(this.contactForm.value)
    this.contactForm.reset()

  }
}
