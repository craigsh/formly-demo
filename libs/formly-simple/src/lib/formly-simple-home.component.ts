import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { StaffData, StaffModel } from '@demo/shared-models';
import { LookupDataService } from '@demo/shared/services';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

@Component({
	template: `
		<h1>Formly simple</h1>

		<form autocomplete="off">
			<formly-form [form]="form" [model]="model" [fields]="fields"></formly-form>
		</form>
	`,
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
			key: 'givenName',
			type: 'input',
			templateOptions: {
				label: 'Given name',
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
			wrappers: ['panel'],
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
			key: 'genderId',
			type: 'select',
			templateOptions: {
				label: 'Gender',
				options: this.lookupData.getGenders(),
			},
		},
		{
			key: 'titleId',
			type: 'select',
			templateOptions: {
				label: 'Title',
				options: this.lookupData.getTitles(),
			},
		},

		{
			key: 'acceptEmail',
			type: 'toggle',
			templateOptions: {
				label: 'Accept email',
			},
		},

		{
			key: 'emailAddress',
			type: 'input',
			templateOptions: {
				label: 'Email address',
			},
			expressionProperties: {
				'templateOptions.disabled': '!model.acceptEmail',
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

	constructor(private lookupData: LookupDataService) {}

	ngOnInit() {
		this.model = StaffData[0];
	}
}
