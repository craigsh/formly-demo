import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormlyProductiveHomeComponent, FormlyProductiveHomeComponentModule } from './formly-productive-home.component';

@NgModule({
	imports: [
		CommonModule,
		FormlyProductiveHomeComponentModule,

		RouterModule.forChild([{ path: '', pathMatch: 'full', component: FormlyProductiveHomeComponent }]),
	],
})
export class FormlyProductiveModule {}
