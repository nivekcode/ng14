import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{ path: 'old-way', loadChildren: () => import('./features/old-way/old-way.module').then(m => m.OldWayModule) }, { path: 'new-way', loadChildren: () => import('./features/new-way/new-way.module').then(m => m.NewWayModule) }];

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
