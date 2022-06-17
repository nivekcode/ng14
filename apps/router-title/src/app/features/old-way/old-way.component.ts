import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-old-way',
  templateUrl: './old-way.component.html',
  styleUrls: ['./old-way.component.scss'],
})
export class OldWayComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let activatedRoute: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (activatedRoute!.firstChild) {
            activatedRoute = activatedRoute.firstChild;
          }
          if (activatedRoute.snapshot.data['title']) {
            routeTitle = activatedRoute!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title) => this.titleService.setTitle(title));
  }
}
