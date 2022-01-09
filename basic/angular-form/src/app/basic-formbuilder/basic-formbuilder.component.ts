import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-formbuilder',
  templateUrl: './basic-formbuilder.component.html',
  styleUrls: ['./basic-formbuilder.component.scss'],
})
export class BasicFormbuilderComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: [null],
      lastName: [{value:null,disabled:true}],
      email: [null],
      gender: [null],
      isMarried: [null],
      country: [null],
      address: this.fb.group({
        city: [null],
        street: [null],
        pincode: [null]
      })
    });

    this.contactForm.get("firstName")?.valueChanges.subscribe(selectedValue => {
      console.log('firstName value changed')
      console.log(selectedValue)
      console.log(this.contactForm.get("firstName")?.value)
      console.log(this.contactForm.value.firstName)   //still shows the old first name
      setTimeout(() => {
        console.log(this.contactForm.value.firstName)   //shows the latest first name
      })
    })
  }

  onGetValue(controlName:string){
    console.log(this.contactForm.get(controlName)?.value)
  }


  onSubmit(){
    console.log(this.contactForm)
    console.log(this.contactForm.value)
    console.log(this.contactForm.getRawValue())
  }

  onReset(){
    this.contactForm.reset()
  }

  onPatchValue(){
    this.contactForm.patchValue({
      firstName:'Jan'
    })
  }

}
