import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  fullName!: string;
  email!: string;
  password!:string;


  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage!: boolean;
  passwordError!: string;
  serverErrorMessages!: string;

  constructor() {

  }

  ngOnInit(): void {
  }


  onSubmit(){
    const user = {
      name:this.fullName,
      email:this.email,
      password:this.password
    }
    if(this.password.length < 4){
      this.serverErrorMessages = 'Password should be atleast 4 characters.';
    }

    if(!this.emailRegex.test(this.email) && this.email.length>0){
      this.serverErrorMessages = 'Invalid Email Id.';
    }
    return false
  }

  // onSubmit(form: NgForm) {
  //   this.userService.postUser(form.value).subscribe(
  //     res => {
  //       this.showSucessMessage = true;
  //       setTimeout(() => this.showSucessMessage = false, 4000);
  //       this.resetForm(form);
  //     },
  //     err => {
  //       if (err.status === 422) {
  //         this.serverErrorMessages = err.error.join('<br/>');
  //       }
  //       else
  //         this.serverErrorMessages = 'Something went wrong.Please contact admin.';
  //     }
  //   );

  // }

  // resetForm(form: NgForm) {
  //   this.userService.selectedUser = {
  //     name: '',
  //     email: '',
  //     password: ''
  //   };
  //   form.resetForm();
  //   this.serverErrorMessages = '';
  // }

}
