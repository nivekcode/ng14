import { ENVIRONMENT_INITIALIZER, inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';
import { BarComponent } from './bar.component';

const routes = [
  {
    path: 'foo',
    loadComponent: () => import('./foo.component').then(c => c.FooComponent),
    providers: [
      {
        provide: ENVIRONMENT_INITIALIZER,
        multi: true,
        // This is called immediately
        useValue: () => inject(LoggerService).log('Route to foo'),
      },
    ],
  },
  {
    path: 'bar',
    loadComponent: () => import('./bar.component').then(c => c.BarComponent),
    providers: [
      {
        provide: ENVIRONMENT_INITIALIZER,
        multi: true,
        // This is called immediately
        useValue: () => inject(LoggerService).log('Route to bar'),
      },
    ],
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => inject(LoggerService).log('Application bootstraped'),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
