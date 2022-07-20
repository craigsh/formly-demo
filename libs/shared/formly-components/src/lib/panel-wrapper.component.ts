import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { MatCardModule } from '@angular/material/card';

@Component({
	standalone: true,
	imports: [CommonModule, MatCardModule],
	template: `
		<mat-card>
			<mat-card-title>{{ to.label }}</mat-card-title>
			<mat-card-content>
				<ng-container #fieldComponent></ng-container>
			</mat-card-content>
		</mat-card>
	`,
	styles: [
		`
			:host {
				display: block;
				margin-bottom: 1rem;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelWrapperComponent extends FieldWrapper {}
