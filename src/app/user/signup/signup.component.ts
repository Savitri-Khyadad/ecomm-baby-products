import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

	fullName!: string;
	email!: string;
	password!: string;


	emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	showSucessMessage!: boolean;
	passwordError!: string;
	serverErrorMessages!: string;

	constructor(private router: Router) {

	}

	ngOnInit(): void {
	}


	async onSubmit() {
		// const user = {
		// 	name: this.fullName,
		// 	email: this.email,
		// 	password: this.password
		// }
		if (this.password.length < 7) {
			this.serverErrorMessages = 'Password should be atleast 7 characters.';
		}

		if (!this.emailRegex.test(this.email) && this.email.length > 0) {
			this.serverErrorMessages = 'Invalid Email Id.';
		}

		var content: any;
		await(async () => {
			await fetch(`http://localhost:3000/users`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: this.fullName,
					email: this.email,
					password: this.password
				})
			}).then(async (res) => {
				// console.log(res.json())
				if (res.status === 201) {
					content = await res.json();
					localStorage.setItem("token", content.token);
					console.log(content)
					// Redirected to different page.
					this.router.navigate(['/products']);
				} else {
					this.serverErrorMessages = 'Email address may already exist or something else. Please Check Again!';
				}
			}).catch(err => {
				this.serverErrorMessages = `There's some issue. Please Try Again!`;
			});
		})();
		
		// return false
		return true
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
