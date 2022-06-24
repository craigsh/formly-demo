import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormlyHomeComponent, FormlyHomeComponentModule } from './formly-home.component';

@NgModule({
	imports: [
		CommonModule,
		FormlyHomeComponentModule,

		RouterModule.forChild([{ path: '', pathMatch: 'full', component: FormlyHomeComponent }]),
	],
})
export class FormlyModule {}
