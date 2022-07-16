import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormlyProductiveHomeComponent } from './formly-productive-home.component';

@NgModule({
	imports: [
		CommonModule,

		RouterModule.forChild([{ path: '', pathMatch: 'full', component: FormlyProductiveHomeComponent }]),
	],
})
export class FormlyProductiveModule {}
