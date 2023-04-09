import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { deleteCurrentUser } from '../../../../store/currentUser/currentUser.actions';
import {
	selectCurrentUserEmail,
	selectCurrentUserError,
	selectCurrentUserId,
	selectCurrentUserLoading,
} from '../../../../store/currentUser/currentUser.selectors';

@Component({
	selector: 'app-delete-account-form',
	templateUrl: './delete-account-form.component.html',
	styleUrls: ['./delete-account-form.component.scss'],
})
export class DeleteAccountFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly store: Store
	) {}

	deleteAccountForm = this.formBuilder.group({
		password: ['', [Validators.required]],
	});
	hidePassword = true;
	currentUserId$ = this.store.select(selectCurrentUserId);
	currentUserEmail$ = this.store.select(selectCurrentUserEmail);
	loading$ = this.store.select(selectCurrentUserLoading);
	error$ = this.store.select(selectCurrentUserError);

	submit() {
		if (this.deleteAccountForm.invalid) return;

		combineLatest([this.currentUserId$, this.currentUserEmail$]).subscribe(
			([id, email]) => {
				if (!id || !email) return;

				const deleteUserDto = {
					password: this.deleteAccountForm.value.password as string,
					email: email,
				};

				this.store.dispatch(deleteCurrentUser({ id, payload: deleteUserDto }));
			}
		);
	}
}
