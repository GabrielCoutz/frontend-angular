import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-signin-form',
	templateUrl: './signin-form.component.html',
	styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent {
	constructor(private readonly formBuilder: FormBuilder) {}
	@Output() modalEvent = new EventEmitter();

	signinForm = this.formBuilder.group({
		email: ['', [Validators.required]],
		password: ['', [Validators.required]],
	});
	hide = true;

	submit() {
		this.modalEvent.emit('loading');

		if (this.signinForm.valid) console.log(this.signinForm.value);
	}
}
