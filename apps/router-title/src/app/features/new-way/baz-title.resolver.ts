import { Injectable } from '@angular/core';
import {finalize, mapTo, of, startWith, take, tap, timer} from "rxjs";

@Injectable({ providedIn: 'root' })
export class BazTitleResolver {
  resolve() {
    return timer(2000).pipe(
      mapTo('Baz / from resolver'),
      tap(console.log),
      startWith('Initial title from resolver'),
      take(2),
      finalize(() => console.log('Done'))
  );
  }
}
