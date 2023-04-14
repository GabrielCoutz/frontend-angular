import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUserId } from '../../store/currentUser/currentUser.selectors';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
	constructor(private readonly store: Store, private readonly router: Router) {}
	userId$ = this.store.select(selectCurrentUserId);

	ngOnInit() {
		this.userId$.subscribe((id) => {
			if (id) this.router.navigate(['/profile', id, 'edit']);
		});
	}
}
