import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { StaffModel, StaffData } from '@demo/shared-models';
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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlySimpleHomeComponent implements OnInit {
	form = new UntypedFormGroup({});
	model: Partial<StaffModel> = {};

	fields: FormlyFieldConfig[] = [
		{
			key: 'staffCode',
			type: 'input',
			focus: true,
			templateOptions: {
				label: 'Staff code',
				required: true,
				maxLength: 12,
			},
		},
		{
			key: 'firstName',
			type: 'input',
			templateOptions: {
				label: 'First name',
				required: true,
				maxLength: 30,
			},
		},
		{
			key: 'surname',
			type: 'input',
			templateOptions: {
				label: 'Surname',
				required: true,
				maxLength: 30,
			},
		},
		{
			key: 'initials',
			type: 'input',
			templateOptions: {
				label: 'Initials',
				maxLength: 10,
			},
		},
		{
			key: 'dateOfBirth',
			type: 'datepicker',
			templateOptions: {
				label: 'Date of birth',
			},
		},
		{
			key: '',
			// wrappers: ['panel'],
			templateOptions: { label: 'Address' },
			fieldGroup: [
				{
					key: 'addressLine1',
					type: 'input',
					templateOptions: {
						label: 'Line 1',
						maxLength: 50,
					},
				},
				{
					key: 'addressLine2',
					type: 'input',
					templateOptions: {
						label: 'Line 2',
						maxLength: 50,
					},
				},
				{
					key: 'addressLine3',
					type: 'input',
					templateOptions: {
						label: 'Line 3',
						maxLength: 50,
					},
				},
				{
					key: 'addressLine4',
					type: 'input',
					templateOptions: {
						label: 'Line 4',
						maxLength: 50,
					},
				},
				{
					key: 'postcode',
					type: 'input',
					templateOptions: {
						label: 'Postcode',
						maxLength: 50,
					},
				},
			],
		},
		{
			key: 'accessOwnRecordOnly',
			type: 'toggle',
			templateOptions: {
				label: 'Access own record only',
			},
		},

		{
			key: 'genderId',
			type: 'select',
			templateOptions: {
				label: 'Gender',
				options: this.getGenders(),
			},
		},
		{
			key: 'titleId',
			type: 'select',
			templateOptions: {
				label: 'Title',
				options: this.getTitles(),
			},
		},
		{
			key: 'emailAddress',
			type: 'input',
			templateOptions: {
				label: 'Email address',
			},
		},
		{
			key: 'phoneNumber',
			type: 'input',
			templateOptions: {
				label: 'Phone number',
			},
		},
	];

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

@NgModule({
	imports: [CommonModule, FormlyModule],
	declarations: [FormlySimpleHomeComponent],
	exports: [FormlySimpleHomeComponent],
})
export class FormlySimpleHomeComponentModule {}
