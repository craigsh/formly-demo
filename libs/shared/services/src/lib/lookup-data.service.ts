import { Injectable } from '@angular/core';
import { SelectItem } from '@demo/shared-models';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LookupDataService {
	getGenders(): Observable<SelectItem[]> {
		return of([
			{
				label: 'Female',
				value: 2,
			},
			{
				label: 'Male',
				value: 1,
			},
			{
				label: 'Prefer not to say',
				value: 0,
			},
		]);
	}

	getTitles(): Observable<SelectItem[]> {
		return of([
			{ label: 'Mr', value: 1 },
			{ label: 'Mrs', value: 2 },
			{ label: 'Ms', value: 3 },
		]);
	}
}
