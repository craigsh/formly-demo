import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatNativeDateModule } from '@angular/material/core';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { PanelWrapperComponent } from '@demo/shared/formly-components';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		AppRoutingModule,
		FormlyMaterialModule,
		FormlyMatToggleModule,
		FormlyModule.forRoot({
			wrappers: [{ name: 'panel', component: PanelWrapperComponent }],

			validationMessages: [
				{
					name: 'required',
					message: (error, field) => {
						const label = field?.templateOptions?.label ?? 'This field';
						return `${label} is required`;
					},
				},
			],
		}),
		MatNativeDateModule,
		FormlyMatDatepickerModule,
		FormlyMatToggleModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
