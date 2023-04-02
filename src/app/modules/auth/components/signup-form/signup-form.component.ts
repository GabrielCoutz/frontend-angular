import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-signup-form',
	templateUrl: './signup-form.component.html',
	styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly userService: UserService
	) {}
	@Output() modalEvent = new EventEmitter();

	signupForm = this.formBuilder.group({
		name: ['', [Validators.required]],
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});
	hidePassword = true;
	errorMessage: string | undefined;

	submit() {
		this.errorMessage = '';

		if (this.signupForm.valid) {
			this.modalEvent.emit('loading');
			const createUserDto = {
				name: this.signupForm.value.name as string,
				email: this.signupForm.value.email as string,
				password: this.signupForm.value.password as string,
			};

			this.userService.create(createUserDto).subscribe({
				next: (response) => {
					this.modalEvent.emit('close');
					console.log(response);
				},
				error: (error) => {
					console.log(error);
					this.errorMessage = 'Email já em uso';
				},
			});
		}
	}
}
