import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IntroComponent } from '../../modules/home/components/intro/intro.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { ProductService } from '../../services/product/product.service';
import { productExpectPayload } from '../../services/product/product.service.mocks';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let homeComponent: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		const productServiceSpy = jasmine.createSpyObj<ProductService>({
			get: of(productExpectPayload),
			getAll: of([productExpectPayload]),
			create: of(productExpectPayload),
			update: of(productExpectPayload),
			delete: undefined,
		});

		await TestBed.configureTestingModule({
			declarations: [HomeComponent, IntroComponent],
			imports: [SharedModule],
			providers: [
				{
					provide: ProductService,
					useValue: productServiceSpy,
				},
			],
		}).compileComponents();
		fixture = TestBed.createComponent(HomeComponent);

		homeComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(homeComponent).toBeTruthy();
	});
});
