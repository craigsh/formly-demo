import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { StaffData, StaffModel } from '@demo/shared-models';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

type SelectItem = {
	label: string;
	value: string | number;
};

@Component({
	template: `<formly-form [form]="form" [model]="model" [fields]="fields"></formly-form>`,
	styles: [
		`
			:host {
				display: block;
			}
		`,
	],
	imports: [CommonModule, FormlyModule],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyProductiveHomeComponent implements OnInit {
	form = new UntypedFormGroup({});
	model: Partial<StaffModel> = {};
	fields: FormlyFieldConfig[] = [];

	ngOnInit() {
		this.model = StaffData[0];
	}

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
