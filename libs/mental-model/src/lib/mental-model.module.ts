import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MentalModelHomeComponent } from './mental-model-home.component';

@NgModule({
	imports: [
		CommonModule,

		RouterModule.forChild([{ path: '', pathMatch: 'full', component: MentalModelHomeComponent }]),
	],
})
export class MentalModelModule {}
