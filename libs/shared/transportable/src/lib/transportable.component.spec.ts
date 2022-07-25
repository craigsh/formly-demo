import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportableComponent } from './transportable.component';

describe('TransportableComponent', () => {
	let component: TransportableComponent;
	let fixture: ComponentFixture<TransportableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TransportableComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TransportableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
