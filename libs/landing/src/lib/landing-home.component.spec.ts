import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeComponent } from './landing-home.component';

describe('LandingHomeComponent', () => {
	let component: LandingHomeComponent;
	let fixture: ComponentFixture<LandingHomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LandingHomeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(LandingHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
