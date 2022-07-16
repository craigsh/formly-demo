import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { StaffData, StaffModel } from '@demo/shared-models';
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
	fields: FormlyFieldConfig[] = [];

	constructor(private lookupData: LookupDataService) {}

	ngOnInit() {
		this.model = StaffData[0];
	}
}
