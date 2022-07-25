import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

interface Model {
	name: string;
	address: string;
	dateOfBirth: Date | undefined;
}

@Component({
	selector: 'mm-mental-model-home',
	standalone: true,
	imports: [CommonModule, FormlyModule, MatButtonModule],
	template: `
		<div class="wrapper">
			<div class="form">
				<h1>Form</h1>

				<form autocomplete="off">
					<formly-form [form]="form" [model]="model" [fields]="fields"></formly-form>
				</form>

				<div class="buttons">
					<button mat-raised-button (click)="clearName()">Clear name on model</button>
					<button mat-raised-button (click)="clearNameForm()">Clear - name field</button>
					<button mat-raised-button (click)="newModel()">Replace model</button>
				</div>
			</div>

			<div class="model">
				<h1>Model</h1>
				<pre>{{ model | json }}</pre>
			</div>
		</div>
	`,
	styles: [
		`
			:host {
				display: block;

				.buttons {
					display: flex;
					width: 100%;

					button {
						margin-right: 1rem;
					}

					margin-top: 1rem;
					justify-content: center;
				}

				.wrapper {
					display: flex;
					flex-direction: column;
					gap: 1rem;

					> div {
						flex: 1;
					}
				}

				.model {
					max-width: 1400px;
					margin-inline: auto;
				}

				pre {
					font-size: 1rem;
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MentalModelHomeComponent {
	form = new UntypedFormGroup({});
	model = {
		name: '',
	} as Model;
	fields: FormlyFieldConfig[] = [
		{
			key: 'name',
			type: 'input',
			templateOptions: {
				label: 'Name',
			},
		},
		{
			key: 'address',
			type: 'input',
			templateOptions: {
				label: 'Address',
			},
		},
		{
			key: 'dateOfBirth',
			type: 'datepicker',
			templateOptions: {
				label: 'Date of birth',
			},
		},
	];

	clearName() {
		this.model.name = '';
	}

	clearNameForm() {
		this.form.get('name')?.setValue('');
	}

	newModel() {
		this.model = {
			name: '',
			address: '',
			dateOfBirth: undefined,
		};
	}
}
