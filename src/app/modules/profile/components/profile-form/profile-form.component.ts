import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUserUpdatePayload } from 'src/app/services/user/interface/user-service.interface';

import { Store } from '@ngrx/store';

import {
	logoutCurrentUser,
	updateCurrentUser,
} from '../../../../store/currentUser/currentUser.actions';
import {
	selectCurrentUser,
	selectCurrentUserError,
	selectCurrentUserId,
	selectCurrentUserLoading,
} from '../../../../store/currentUser/currentUser.selectors';

@Component({
	selector: 'app-profile-form',
	templateUrl: './profile-form.component.html',
	styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly store: Store
	) {}

	profileForm = this.formBuilder.group({
		name: ['', []],
		email: ['', [Validators.email]],
		password: ['', []],
	});
	hidePassword = true;
	currentUser$ = this.store.select(selectCurrentUser);
	currentUserId$ = this.store.select(selectCurrentUserId);
	error$ = this.store.select(selectCurrentUserError);
	loading$ = this.store.select(selectCurrentUserLoading);

	ngOnInit() {
		this.currentUser$.subscribe((user) => {
			if (user)
				this.profileForm.setValue({
					email: user.email,
					name: user.name,
					password: '',
				});
		});
	}

	submit() {
		if (!this.profileForm.valid) return;

		const updateUserDto = {
			name: this.profileForm.value.name,
			email: this.profileForm.value.email,
		} as IUserUpdatePayload;

		this.currentUserId$.subscribe((userId) => {
			if (userId)
				this.store.dispatch(
					updateCurrentUser({
						id: userId,
						payload: updateUserDto,
					})
				);
		});
	}

	logout() {
		this.store.dispatch(logoutCurrentUser());
	}
}
