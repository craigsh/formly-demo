import { ChangeDetectionStrategy, Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	template: ` <p>formly-productive-home works!</p> `,
	styles: [
		`
			:host {
				display: block;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyProductiveHomeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}

@NgModule({
	imports: [CommonModule],
	declarations: [FormlyProductiveHomeComponent],
	exports: [FormlyProductiveHomeComponent],
})
export class FormlyProductiveHomeComponentModule {}
