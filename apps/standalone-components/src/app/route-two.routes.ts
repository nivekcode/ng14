import { RouteTwoComponent } from './route-two.component';

export const routes = [
  {
    path: '',
    component: RouteTwoComponent,
    children: [
      {
        path: 'subroute-one',
        loadComponent: () =>
          import('./subroutes/subroute-one.component').then(
            (c) => c.SubrouteOneComponent
          ),
      },
      {
        path: 'subroute-two',
        loadComponent: () =>
          import('./subroutes/subroute-two.component').then(
            (c) => c.SubrouteTwoComponent
          ),
      },
    ],
  },
];
