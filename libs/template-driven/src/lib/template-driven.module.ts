import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplateHomeComponent, TemplateHomeComponentModule } from './template-home.component';

@NgModule({
	imports: [
		CommonModule,
		TemplateHomeComponentModule,

		RouterModule.forChild([{ path: '', pathMatch: 'full', component: TemplateHomeComponent }]),
	],
})
export class TemplateDrivenModule {}
