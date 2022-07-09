import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'demo-root',
	template: `
		<demo-welcome></demo-welcome>
		<div class="router-wrapper">
			<div class="inner-wrapper">
				<router-outlet></router-outlet>
			</div>
		</div>
	`,
	styles: [
		`
			:host {
				/* --gradient: linear-gradient(45deg, #845ec2, #d65db1, #ff6f91, #ff9671, #ffc75f, #f9f871); */

				display: grid;
				height: 100%;

				grid-template-rows: auto 1fr;

				/* background-image: var(--gradient);
				background-size: 400%;
				background-position: right;
				transition: background-position 1s ease-in-out;
				animation: bg-animation 30s infinite alternate; */
			}

			@keyframes bg-animation {
				0% {
					background-position: left;
				}
				100% {
					background-position: right;
				}
			}

			.router-wrapper {
				margin: 0.5rem;
				padding: 0.5rem;
				background-color: #fff;
				opacity: 0.8;
				border-radius: 0.5rem;
				box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.2);
				overflow: hidden;
			}

			.inner-wrapper {
				overflow-y: auto;
				padding: 0.5rem;
				height: 100%;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
