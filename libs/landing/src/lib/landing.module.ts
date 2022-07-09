import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingHomeComponent } from './landing-home.component';

@NgModule({
	imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: LandingHomeComponent }])],
})
export class LandingModule {}
