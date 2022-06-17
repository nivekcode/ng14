import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OldWayComponent } from './old-way.component';
import { OldWayBarComponent } from './old-way-bar.component';
import { OldWayFooComponent } from './old-way-foo.component';

const routes: Routes = [
  {
    path: '',
    component: OldWayComponent,
    data: { title: 'Old Way Component' },
    children: [
      {
        path: 'bar',
        component: OldWayBarComponent,
        data: { title: 'Old Way Bar' },
      },
      {
        path: 'foo',
        component: OldWayFooComponent,
        data: { title: 'Old Way Foo' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldWayRoutingModule {}
