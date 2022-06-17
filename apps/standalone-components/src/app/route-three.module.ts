import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'route-three',
  template: `
    <h1>Route three</h1>
    <a routerLink="./subroute-one">Subroute one</a>
    <a routerLink="./subroute-two">Subroute two</a>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      a {
        margin-right: 25px;
      }
    `,
  ],
})
export class RouteThreeComponent {}

@Component({
  selector: 'route-three-subroute-one',
  template: ` <h1>Route three subroute one</h1> `,
})
export class RouteThreeSubrouteOneComponent {}

@Component({
  selector: 'route-three-subroute-two',
  template: ` <h1>Route three subroute two</h1> `,
})
export class RouteThreeSubrouteTwoComponent {}

const routes: Routes = [
  {
    path: '',
    component: RouteThreeComponent,
    children: [
      {
        path: 'subroute-one',
        component: RouteThreeSubrouteOneComponent,
      },
      {
        path: 'subroute-two',
        component: RouteThreeSubrouteTwoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
    RouteThreeComponent,
    RouteThreeSubrouteOneComponent,
    RouteThreeSubrouteTwoComponent,
  ],
})
export class RouteThreeModule {}
