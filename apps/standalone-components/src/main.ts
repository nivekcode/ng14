import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

const routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'route-one',
    loadComponent: () =>
      import('./app/route-one.component').then((c) => c.RouteOneComponent),
  },
  {
    path: 'route-two',
    loadChildren: () =>
      import('./app/route-two.routes').then((c) => c.routes),
  },
  {
    path: 'route-three',
    loadChildren: () =>
      import('./app/route-three.module').then((c) => c.RouteThreeModule),
  }
] as any;

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));
