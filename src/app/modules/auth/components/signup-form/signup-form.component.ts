import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-signup-form',
	templateUrl: './signup-form.component.html',
	styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly userService: UserService,
		private readonly router: Router
	) {}

	signupForm = this.formBuilder.group({
		name: ['', [Validators.required]],
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});
	hidePassword = true;
	errorMessage: string | undefined;
	loading = false;

	submit() {
		this.errorMessage = '';
		if (!this.signupForm.valid) return;
		this.loading = true;

		const createUserDto = {
			name: this.signupForm.value.name as string,
			email: this.signupForm.value.email as string,
			password: this.signupForm.value.password as string,
		};

		this.userService.create(createUserDto).subscribe({
			next: () => {
				this.router.navigate(['/account/signin']);
			},
			error: () => {
				this.loading = false;
				this.errorMessage = 'Email já em uso';
			},
		});
	}
}
