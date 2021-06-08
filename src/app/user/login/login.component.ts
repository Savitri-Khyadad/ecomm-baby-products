import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [UserService]
})
export class LoginComponent implements OnInit {

	// fullName!: string;
	email!: string;
	password!: string;


	emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	showSucessMessage!: boolean;
	serverErrorMessages!: string;

	constructor(public userService: UserService,
		private router: Router) { }

	ngOnInit(): void {
	}

	async onSubmit() {

		if (this.password.length < 7) {
			this.serverErrorMessages = 'Password should be atleast 7 characters.';
		}

		if (!this.emailRegex.test(this.email) && this.email.length > 0) {
			this.serverErrorMessages = 'Invalid Email Id.';
		}

		let content: any;
		await fetch(`http://localhost:3000/users/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.email,
                password: this.password
            })
        }).then(async (res) => {
            if (res.status === 200) {
                content = await res.json();
				localStorage.setItem("token", content.token);
				// Those 3 lines already in the function before modification.
				this.userService.isLoggedIn  = true;
				console.log(content)
				this.router.navigate(['products']);
            } else {
				this.serverErrorMessages = 'Please check your credentials!'
            }
        }).catch(err => {
			this.serverErrorMessages = 'Something went wrong!'
			console.log(err)
        });

		/*---------------------------------------------------------------------*/

		// this.userService.postUser(form.value).subscribe(
		//   res => {
		//     this.showSucessMessage = true;
		//     setTimeout(() => this.showSucessMessage = false, 4000);
		//     this.resetForm(form);
		//   },
		//   err => {
		//     if (err.status === 422) {
		//       this.serverErrorMessages = err.error.join('<br/>');
		//     }
		//     else
		//       this.serverErrorMessages = 'Something went wrong.Please contact admin.';
		//   }
		// );
	}

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
