import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app',
  standalone: true,
  imports: [MatToolbarModule, RouterModule],
  template: `
    <mat-toolbar color="primary">
      <a routerLink="./route-one" routerLinkActive="active">Route one</a>
      <a routerLink="./route-two" routerLinkActive="active">Route two</a>
      <a routerLink="./route-three" routerLinkActive="active">Route three</a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      a {
        color: white;
        margin-right: 20px;
        text-decoration: none;
      }

      a.active {
        color: white;
        text-decoration: underline;
      }
    `,
  ],
})
export class AppComponent {
  title = 'standalone-components';
}
