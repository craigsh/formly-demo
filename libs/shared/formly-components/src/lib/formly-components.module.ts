import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyButtonFieldComponentModule } from './formly-button-field/formly-button-field.component';

@NgModule({
	imports: [CommonModule, FormlyButtonFieldComponentModule],
	exports: [FormlyButtonFieldComponentModule],
})
export class FormlyComponentsModule {}
