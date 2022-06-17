import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewWayBarComponent } from './new-way-bar.component';
import { NewWayBazComponent } from './new-way-baz.component';
import { NewWayFooComponent } from './new-way-foo.component';
import { NewWayComponent } from './new-way.component';
import { BazTitleResolver } from './baz-title.resolver';

const routes: Routes = [
  {
    path: '',
    component: NewWayComponent,
    title: 'New Way Component',
    children: [
      {
        path: 'bar',
        component: NewWayBarComponent,
        title: 'New Way Bar',
      },
      {
        path: 'foo',
        component: NewWayFooComponent,
        title: 'New Way Foo',
      },
      {
        path: 'baz',
        component: NewWayBazComponent,
        title: BazTitleResolver,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewWayRoutingModule {}
