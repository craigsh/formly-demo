import { TestBed } from '@angular/core/testing';

import { CustomFormBuilderService } from './custom-form-builder.service';

describe('CustomFormBuilderService', () => {
	let service: CustomFormBuilderService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CustomFormBuilderService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
