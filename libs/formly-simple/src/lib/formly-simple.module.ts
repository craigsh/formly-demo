import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormlySimpleHomeComponent, FormlySimpleHomeComponentModule } from './formly-simple-home.component';

@NgModule({
	imports: [
		CommonModule,
		FormlySimpleHomeComponentModule,

		RouterModule.forChild([{ path: '', pathMatch: 'full', component: FormlySimpleHomeComponent }]),
	],
})
export class FormlySimpleModule {}
