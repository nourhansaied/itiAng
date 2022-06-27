import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  // contactUs: FormGroup = this.fb.group({
  //   userName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  //   uAge: new FormControl(10, [Validators.required, Validators.min(16), Validators.max(30)]),
  //   password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(10),
  //   Validators.pattern(/^[A-Z][a-z]{3,6}/)])


  // })
  contactUs: FormGroup = this.fb.group({
    userName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    uAge: [10, [Validators.required, Validators.min(16), Validators.max(30)]],
    password: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(10),
     Validators.pattern(/^[A-Z][a-z]{3,6}/)]]

  })
  // showError:boolean = false
  // formData: any = {
  //   name: "",
  //   age: 22,
  //   email:""
  // }
  constructor(private fb:FormBuilder) { }

  get controlValidation() {
    return this.contactUs.controls
  }
  ngOnInit(): void {
  }


  // sendValue(data: any) {
  //   if (data.valid) {
  //     console.log("Ay 7aga", data);
  //     console.log(data.value);

  //   } else {
  //     this.showError = true
  //   }

  // }


  submitReactiveForm() {

    console.log(this.contactUs);

  }
}


// import reactive form modules ... app module
// TS ... import formGroup ...form Control
// contactUs from formGroup
// form control inside form group
// back to html ....form ... formGroup ... ngSubmit
// input formControlName
// call function when submit



// form builder




// setValue ... patchValue

// dynamic array (FormArray)
