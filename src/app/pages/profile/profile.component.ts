import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCurrentUser } from '../../store/currentUser/currentUser.actions';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
	constructor(
		private readonly store: Store,
		private readonly ActivatedRoute: ActivatedRoute
	) {}
	userId: string = this.ActivatedRoute.snapshot.params['id'];

	ngOnInit() {
		this.store.dispatch(loadCurrentUser({ id: this.userId }));
	}
}
