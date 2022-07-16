import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalModelHomeComponent } from './mental-model-home.component';

describe('MentalModelHomeComponent', () => {
	let component: MentalModelHomeComponent;
	let fixture: ComponentFixture<MentalModelHomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MentalModelHomeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(MentalModelHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
