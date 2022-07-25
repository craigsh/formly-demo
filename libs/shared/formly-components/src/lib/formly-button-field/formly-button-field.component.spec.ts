import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyButtonFieldComponent } from './formly-button-field.component';

describe('FormlyButtomFieldComponent', () => {
	let component: FormlyButtonFieldComponent;
	let fixture: ComponentFixture<FormlyButtonFieldComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FormlyButtonFieldComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(FormlyButtonFieldComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
