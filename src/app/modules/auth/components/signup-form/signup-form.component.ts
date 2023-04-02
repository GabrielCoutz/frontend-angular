import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-signup-form',
	templateUrl: './signup-form.component.html',
	styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
	constructor(private readonly formBuilder: FormBuilder) {}
	@Output() modalEvent = new EventEmitter();

	signupForm = this.formBuilder.group({
		name: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required],
	});
	hide = true;

	submit() {
		this.modalEvent.emit('loading');

		if (this.signupForm.valid) console.log(this.signupForm.value);
	}
}
