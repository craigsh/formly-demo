import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="card">
			<h3 class="card-header">{{ to.label }}</h3>
			<div class="card-body">
				<ng-container #fieldComponent></ng-container>
			</div>
		</div>
	`,
	styles: [
		`
			:host {
				h3 {
					margin: 0 0 0.5rem 0;
					font-weight: 500;
					color: #333;
					padding: 0.25rem;
					box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
				}

				display: block;
				.card {
					border: 1px solid rgba(100, 100, 100, 0.5);
					border-radius: 0.25rem;
					padding: 0.5rem;
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelWrapperComponent extends FieldWrapper {}
