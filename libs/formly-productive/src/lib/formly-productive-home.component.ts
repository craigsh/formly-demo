import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { StaffData, StaffModel } from '@demo/shared-models';
import { CustomFormBuilderService } from '@demo/shared/formly-utils';
import { LookupDataService } from '@demo/shared/services';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

@Component({
	template: `
		<h1>Formly productive</h1>

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
export class FormlyProductiveHomeComponent implements OnInit {
	form = new UntypedFormGroup({});
	model: Partial<StaffModel> = {};
	fields: FormlyFieldConfig[] = this.builder.buildFields<StaffModel>({
		parentName: '',
		dtoClassName: 'StaffModel',
		fields: (fb) => [
			fb.flexRow([
				fb.textField('staffCode', {
					label: 'Staff code',
					size: 1,
					focus: true,
					required: true,
					maxLength: 12,
					noGrow: true,
				}),
			]),

			fb.flexRow([
				fb.textField('givenName', {
					size: 2,
					label: 'Given name',
					required: true,
					maxLength: 50,
				}),

				fb.textField('surname', {
					size: 2,
					label: 'Surname',
					required: true,
					maxLength: 50,
				}),

				fb.textField('initials', {
					size: 1,
					label: 'Initials',
					maxLength: 5,
				}),
				fb.dateField('dateOfBirth', {
					label: 'Date of birth',
					size: 1,
				}),
			]),

			fb.flexRow([
				fb.panelWrapper({ label: 'Address', size: 3, noGrow: true }, [
					fb.textField('addressLine1', { label: 'Line 1', size: 4, maxLength: 30 }),
					fb.textField('addressLine2', { label: 'Line 2', size: 4, maxLength: 30 }),
					fb.textField('addressLine3', { label: 'Line 3', size: 4, maxLength: 30 }),
					fb.flexRow([
						fb.textField('addressLine4', { label: 'Line 4', size: 4, maxLength: 30, noGrow: true }),
						fb.textField('postcode', { label: 'Postcode', size: 2, maxLength: 50 }),
					]),
				]),
			]),

			fb.flexRow([
				fb.selectField('genderId', {
					label: 'Gender',
					size: 2,
					lookups: this.lookupData.getGenders(),
				}),
				fb.selectField('titleId', {
					label: 'Title',
					size: 2,
					lookups: this.lookupData.getTitles(),
				}),
				fb.textField('phoneNumber', {
					label: 'Phone number',
					size: 1,
					noGrow: true,
				}),
			]),

			fb.flexRow({ size: 6 }, [
				fb.toggleField('acceptEmail', {
					label: 'Accept email',
				}),
				fb.textField('emailAddress', {
					label: 'Email address',
					expressionProperties: {
						'templateOptions.disabled': '!model.acceptEmail',
						'templateOptions.required': 'model.acceptEmail',
					},
				}),
			]),
		],
	});

	constructor(private builder: CustomFormBuilderService, private lookupData: LookupDataService) {}

	ngOnInit() {
		this.model = StaffData[0];
	}
}
