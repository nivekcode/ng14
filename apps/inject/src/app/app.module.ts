import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {SubscriptionHandlingComponent} from "./subscription-handling.component";

@NgModule({
  declarations: [AppComponent, SubscriptionHandlingComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
