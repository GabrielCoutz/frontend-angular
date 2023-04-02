import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../../app/services/auth/auth.service';
import { IAuthServiceError } from '../../../../../app/services/auth/interface/auth-service.interface';

@Component({
	selector: 'app-signin-form',
	templateUrl: './signin-form.component.html',
	styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly authService: AuthService
	) {}
	@Output() modalEvent = new EventEmitter();

	signinForm = this.formBuilder.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});
	hidePassword = true;
	errorMessage: string | undefined;

	submit() {
		this.errorMessage = '';

		if (this.signinForm.valid) {
			this.modalEvent.emit('loading');
			const signinDto = {
				email: this.signinForm.value.email as string,
				password: this.signinForm.value.password as string,
			};

			this.authService.signin(signinDto).subscribe({
				next: (response) => {
					this.modalEvent.emit('close');
					console.log(response);
				},
				error: (error: IAuthServiceError) => {
					console.log(error);
					this.errorMessage = 'Credenciais inválidas';
				},
			});
		}
	}
}
