import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserUpdatePayload } from 'src/app/services/user/interface/user-service.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-profile-form',
	templateUrl: './profile-form.component.html',
	styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly userService: UserService,
		private readonly ActivatedRoute: ActivatedRoute,
		private readonly router: Router
	) {}

	@Output() modalEvent = new EventEmitter();
	userId = this.ActivatedRoute.snapshot.params['id'];

	hidePassword = true;
	errorMessage: string | undefined;
	infoMessage: string | undefined;

	profileForm = this.formBuilder.group({
		name: ['', []],
		email: ['', [Validators.email]],
		password: ['', []],
	});

	ngOnInit() {
		this.modalEvent.emit('loading');

		this.userService.get(this.userId).subscribe({
			next: ({ email, name }) => {
				this.modalEvent.emit('close');

				this.profileForm.setValue({
					name,
					email,
					password: '',
				});
			},
			error: () => {
				this.modalEvent.emit('close');

				this.router.navigate(['account/signin']);
			},
		});
	}

	submit() {
		this.errorMessage = '';
		this.infoMessage = '';

		if (this.profileForm.valid) {
			this.modalEvent.emit('loading');
			const updateUserDto: IUserUpdatePayload = {
				name: this.profileForm.value.name as string,
				email: this.profileForm.value.email as string,
			};

			if (this.profileForm.value.password)
				updateUserDto.password = this.profileForm.value.password;

			this.userService.update(this.userId, updateUserDto).subscribe({
				next: ({ email, name }) => {
					this.modalEvent.emit('close');
					this.infoMessage = 'Dados atualizados com sucesso';

					this.profileForm.setValue({
						name,
						email,
						password: '',
					});
				},
				error: () => {
					this.modalEvent.emit('close');

					this.errorMessage =
						'Não foi possível atualizar os dados. Por favor, tente novamente mais tarde.';
				},
			});
		}
	}

	logout() {
		localStorage.removeItem('token');
		this.router.navigate(['account/signin']);
	}
}
