import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('@demo/landing').then((module) => module.LandingModule),
	},
	{
		path: 'template-driven',
		loadChildren: () => import('@demo/template-driven').then((module) => module.TemplateDrivenModule),
	},
	{
		path: 'reactive',
		loadChildren: () => import('@demo/reactive').then((module) => module.ReactiveModule),
	},
	{
		path: 'formly-simple',
		loadChildren: () => import('@demo/formly-simple').then((module) => module.FormlySimpleModule),
	},
	{
		path: 'formly-productive',
		loadChildren: () => import('@demo/formly-productive').then((module) => module.FormlyProductiveModule),
	},
	{
		path: '*',
		redirectTo: '',
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			// enableTracing: true, // <-- debugging purposes only

			// https://github.com/mgechev/ngx-quicklink
			preloadingStrategy: PreloadAllModules,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
