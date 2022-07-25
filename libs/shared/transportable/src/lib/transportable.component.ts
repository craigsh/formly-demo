import { CdkPortal, DomPortalOutlet, PortalModule, PortalOutlet } from '@angular/cdk/portal';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
	AfterViewChecked,
	ChangeDetectionStrategy,
	Component,
	Inject,
	Input,
	NgModule,
	OnDestroy,
	ViewChild,
} from '@angular/core';

@Component({
	selector: 'ui-transportable',
	template: `
		<div class="portal" *cdkPortal>
			<ng-content></ng-content>
		</div>
	`,
	styles: [
		`
			// Never display, since our content is being transported to another place.
			:host {
				display: none;
			}

			.portal {
				height: 100%;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportableComponent implements AfterViewChecked, OnDestroy {
	@Input() hostQuerySelector?: string;

	@ViewChild(CdkPortal) portal!: CdkPortal;

	private portalHost?: PortalOutlet;
	private initialised = false;

	constructor(@Inject(DOCUMENT) private document: Document) {}

	ngAfterViewChecked(): void {
		if (!this.hostQuerySelector || this.initialised) {
			return;
		}

		const container = this.document.querySelector(this.hostQuerySelector);
		if (!container) {
			return;
		}

		// Create a portalHost from a DOM element
		this.portalHost = new DomPortalOutlet(container);

		// Attach portal to host
		this.portalHost.attach(this.portal);
		this.initialised = true;
	}

	ngOnDestroy() {
		if (this.portalHost) {
			this.portalHost.detach();
		}
	}
}

@NgModule({
	imports: [CommonModule, PortalModule],
	declarations: [TransportableComponent],
	exports: [TransportableComponent],
})
export class TransportableComponentModule {}
