import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FooComponent } from './foo.component';
import {BarComponent} from "./bar.component";

export const GREETING = new InjectionToken<string>('Greeting');

const routes = [
  {
    path: 'foo',
    component: FooComponent,
    providers: [{ provide: GREETING, useValue: 'hello' }],
  },
  {
    path: 'bar',
    component: BarComponent,
    providers: [{ provide: GREETING, useValue: 'goodbye' }],
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
