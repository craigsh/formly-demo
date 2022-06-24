import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
	template: ` <p>template-home works!</p> `,
	styles: [
		`
			:host {
				display: block;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHomeComponent {}

@NgModule({
	imports: [CommonModule],
	declarations: [TemplateHomeComponent],
	exports: [TemplateHomeComponent],
})
export class TemplateHomeComponentModule {}
