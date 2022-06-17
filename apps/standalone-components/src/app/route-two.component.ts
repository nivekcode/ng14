import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'route-two',
  imports: [RouterModule],
  template: `
    <h1>Route two</h1>
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
  standalone: true,
})
export class RouteTwoComponent {}
