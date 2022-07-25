import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FieldType, FormlyModule } from '@ngx-formly/core';

@Component({
	template: `<button
		mat-raised-button
		[disabled]="to.disabled"
		[type]="to.type"
		[color]="to['color']"
		[attr.style]="style"
		(click)="onClick($event)"
	>
		{{ to['text'] }}
	</button> `,
	styles: [
		`
			:host {
				display: block;
				button {
					margin: 0;
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyButtonFieldComponent extends FieldType {
	get style() {
		let setStyle = '';
		if (this.to.attributes && this.to.attributes['style']) {
			setStyle = this.to.attributes['style'] + ';';
		}

		if (this.to['stretch']) {
			setStyle += ' width: 100%;';
		}
		return setStyle;
	}

	onClick($event: MouseEvent) {
		if (this.to['onClick']) {
			this.to['onClick']($event, this.model, this.form);
		}
	}
}

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		FormlyModule.forChild({
			types: [
				{
					name: 'fd-button',
					component: FormlyButtonFieldComponent,
					defaultOptions: {
						templateOptions: {
							type: 'button',
						},
					},
				},
			],
		}),
	],
	declarations: [FormlyButtonFieldComponent],
	exports: [FormlyButtonFieldComponent],
})
export class FormlyButtonFieldComponentModule {}
