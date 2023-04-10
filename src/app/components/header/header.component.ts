import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState,
} from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectCurrentUser } from '../../store/currentUser/currentUser.selectors';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	constructor(
		private readonly breakpointObserver: BreakpointObserver,
		private readonly store: Store
	) {}
	destroyed = new Subject<void>();
	mobileView = false;
	user$ = this.store.select(selectCurrentUser);

	ngOnInit() {
		this.breakpointObserver
			.observe([Breakpoints.XSmall])
			.pipe(takeUntil(this.destroyed))
			.subscribe({
				next: (result: BreakpointState) => (this.mobileView = result.matches),
			});
	}

	ngOnDestroy() {
		this.destroyed.next();
		this.destroyed.complete();
	}
}
