import { Directive, HostListener } from '@angular/core';

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: 'input',
	standalone: true,
})
export class MyInputDirective {
	@HostListener('keydown', ['$event'])
	onKeyDown(event: KeyboardEvent): void {
		console.log('keydown', event);
	}
}
