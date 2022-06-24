import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent, WelcomeComponent],
	imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
