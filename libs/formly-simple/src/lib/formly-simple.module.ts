import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormlySimpleHomeComponent } from './formly-simple-home.component';

@NgModule({
	imports: [
		CommonModule,

		RouterModule.forChild([{ path: '', pathMatch: 'full', component: FormlySimpleHomeComponent }]),
	],
})
export class FormlySimpleModule {}
