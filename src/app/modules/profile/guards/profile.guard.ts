import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { map } from 'rxjs';
@Injectable({
	providedIn: 'root',
})
export class ProfileGuard {
	constructor(
		private readonly authService: AuthService,
		private readonly router: Router
	) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> {
		const token = localStorage.getItem('token');
		if (!token) {
			this.router.navigate(['/account/signin']);
			return of(false);
		}

		return this.authService.validate(token).pipe(
			map((value) => {
				if (!value) {
					this.router.navigate(['/account/signin']);
					return false;
				}
				return true;
			}),
			catchError(() => this.router.navigate(['/account/signin']))
		);
	}
}
