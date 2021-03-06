import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PAGES, COMPONENTS, PIPES, SERVICES, MATERIAL }  from './app.common';

@NgModule({
	declarations: [
		AppComponent,
		...PAGES,
		...COMPONENTS,
		...PIPES
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		...MATERIAL
	],
	providers: [
		...SERVICES
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
