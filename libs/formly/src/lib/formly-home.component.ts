import { ChangeDetectionStrategy, Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	template: ` <p>formly-home works!</p> `,
	styles: [
		`
			:host {
				display: block;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyHomeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}

@NgModule({
	imports: [CommonModule],
	declarations: [FormlyHomeComponent],
	exports: [FormlyHomeComponent],
})
export class FormlyHomeComponentModule {}
