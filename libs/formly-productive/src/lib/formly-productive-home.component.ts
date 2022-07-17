import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { StaffData, StaffModel } from '@demo/shared-models';
import { CustomFormBuilderService } from '@demo/shared/formly-utils';
import { LookupDataService } from '@demo/shared/services';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

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
	fields: FormlyFieldConfig[] = this.builder.buildSecuredTypedFields<StaffModel>({
		parentName: '',
		dtoClassName: 'StaffModel',
		fields: (b) => [
			b.flexRow([
				b.textField('staffCode', {
					label: 'Staff code',
					size: 1,
					focus: true,
					required: true,
					maxLength: 12,
				}),
			]),
			b.flexRow([
				b.textField('givenName', {
					size: 2,
					label: 'Given name',
					required: true,
					maxLength: 50,
				}),

				b.textField('surname', {
					size: 2,
					label: 'Surname',
					required: true,
					maxLength: 50,
				}),

				b.textField('initials', {
					size: 1,
					label: 'Initials',
					maxLength: 5,
				}),
				b.dateField('dateOfBirth', {
					label: 'Date of birth',
					size: 1,
				}),
			]),
			b.flexRow([
				b.panelWrapper({ label: 'Address', size: 3, noGrow: true }, [
					b.textField('addressLine1', { label: 'Line 1', maxLength: 30 }),
					b.textField('addressLine2', { label: 'Line 2', maxLength: 30 }),
					b.textField('addressLine3', { label: 'Line 3', maxLength: 30 }),
					b.flexRow([
						b.textField('addressLine4', { label: 'Line 4', size: 4, maxLength: 30 }),
						b.textField('postcode', { label: 'Postcode', size: 2, maxLength: 50 }),
					]),
				]),
			]),
			b.flexRow([
				b.toggleField('accessOwnRecordOnly', {
					label: 'Access own record only',
					size: 2,
				}),
			]),
			b.flexRow([
				b.selectField('genderId', {
					label: 'Gender',
					size: 2,
					lookups: this.lookupData.getGenders(),
				}),
				b.selectField('titleId', {
					label: 'Title',
					size: 2,
					lookups: this.lookupData.getTitles(),
				}),
				b.textField('emailAddress', {
					label: 'Email address',
					size: 3,
				}),
				b.textField('phoneNumber', {
					label: 'Phone number',
					size: 1,
				}),
			]),
		],
	});

	constructor(private builder: CustomFormBuilderService, private lookupData: LookupDataService) {}

	ngOnInit() {
		this.model = StaffData[0];
	}
}
