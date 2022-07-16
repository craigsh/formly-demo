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
				b.textField('givenName', {
					size: 2,
					label: 'Given name',
					focus: true,
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
			]),
		],
	});

	constructor(private builder: CustomFormBuilderService, private lookupData: LookupDataService) {}

	ngOnInit() {
		this.model = StaffData[0];
	}
}
