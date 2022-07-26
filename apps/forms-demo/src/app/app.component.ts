import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
	selector: 'demo-root',
	template: `
		<div class="container" [class.is-mobile]="mobileQuery.matches">
			<mat-toolbar color="primary" class="toolbar">
				<button mat-icon-button (click)="sideNav.toggle()"><mat-icon>menu</mat-icon></button>
				<h1 class="app-name">Forms demo</h1>
			</mat-toolbar>

			<mat-sidenav-container class="sidenav-container" [style.marginTop.px]="mobileQuery.matches ? 56 : 0">
				<mat-sidenav
					#sideNav
					[mode]="mobileQuery.matches ? 'over' : 'side'"
					[fixedInViewport]="mobileQuery.matches"
					fixedTopGap="56"
				>
					<mat-nav-list>
						<a
							mat-list-item
							*ngFor="let route of routes"
							[routerLink]="route.path"
							routerLinkActive="active-link"
							>{{ route.title }}</a
						>
					</mat-nav-list>
				</mat-sidenav>

				<mat-sidenav-content>
					<router-outlet></router-outlet>
				</mat-sidenav-content>
			</mat-sidenav-container>
		</div>
	`,
	styles: [
		`
			@import 'theme-variables';

			.container {
				display: flex;
				flex-direction: column;
				position: absolute;
				inset: 0;
			}

			.is-mobile .toolbar {
				position: fixed;
				/* Make sure the toolbar will stay on top of the content as it scrolls past. */
				z-index: 2;
			}

			.sidenav-container {
				/* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This
     			   causes <mat-sidenav-content> to act as our scrolling element for desktop layouts. */
				flex: 1;
			}

			.is-mobile .sidenav-container {
				/* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the
     			   <body> to be our scrolling element for mobile layouts. */
				flex: 1 0 auto;
			}

			mat-sidenav-content {
				position: relative;
				padding: 0.5rem;
			}

			.router-wrapper {
				height: 100%;
			}

			.active-link {
				color: $warn;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;

	routes = [
		{ path: '/reactive', title: 'Reactive' },
		{ path: '/template-driven', title: 'Template-driven' },
		// { path: '/mental-model', title: 'Mental model' },
		{ path: '/formly-simple', title: 'Formly simple' },
		{ path: '/formly-productive', title: 'Formly productive' },
	];

	constructor(media: MediaMatcher, cdRef: ChangeDetectorRef) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => cdRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
