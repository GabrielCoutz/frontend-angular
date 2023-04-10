import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../app/services/auth/auth.service';

@Component({
	selector: 'app-signin-form',
	templateUrl: './signin-form.component.html',
	styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly authService: AuthService,
		private readonly router: Router
	) {}

	signinForm = this.formBuilder.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});
	hidePassword = true;
	errorMessage: string | undefined;
	loading = false;

	submit() {
		this.errorMessage = '';
		if (!this.signinForm.valid) return;

		this.loading = true;
		const signinDto = {
			email: this.signinForm.value.email as string,
			password: this.signinForm.value.password as string,
		};

		this.authService.signin(signinDto).subscribe({
			next: (response) => {
				this.loading = false;

				localStorage.setItem('token', response.token);
				this.router.navigate(['/profile', response.id]);
			},
			error: () => {
				this.loading = false;

				this.errorMessage = 'Credenciais inválidas';
			},
		});
	}
}
