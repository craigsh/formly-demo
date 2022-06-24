import { ChangeDetectionStrategy, Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	template: ` <p>reactive-home works!</p> `,
	styles: [
		`
			:host {
				display: block;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveHomeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}

@NgModule({
	imports: [CommonModule],
	declarations: [ReactiveHomeComponent],
	exports: [ReactiveHomeComponent],
})
export class ReactiveHomeComponentModule {}
