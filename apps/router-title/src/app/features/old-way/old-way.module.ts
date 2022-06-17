import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OldWayRoutingModule } from './old-way-routing.module';
import { OldWayComponent } from './old-way.component';


@NgModule({
  declarations: [
    OldWayComponent
  ],
  imports: [
    CommonModule,
    OldWayRoutingModule
  ]
})
export class OldWayModule { }
