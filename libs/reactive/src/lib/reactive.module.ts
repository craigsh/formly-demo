import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveHomeComponent, ReactiveHomeComponentModule } from './reactive-home.component';

@NgModule({
	imports: [
		CommonModule,
		ReactiveHomeComponentModule,

		RouterModule.forChild([{ path: '', pathMatch: 'full', component: ReactiveHomeComponent }]),
	],
})
export class ReactiveModule {}
