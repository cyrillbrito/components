import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app-routes';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(
  AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(appRoutes))]
}).catch(err => console.error(err));
