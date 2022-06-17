import {ChangeDetectorRef, Component, inject, OnInit, ViewRef} from '@angular/core';
import {
  finalize,
  interval,
  observable,
  Observable,
  ReplaySubject,
  Subject,
  takeUntil,
  UnaryFunction,
} from 'rxjs';

export function takeUntilDestroy$<T>(): UnaryFunction<
  Observable<T>,
  Observable<T>
> {
  const viewRef = inject(ChangeDetectorRef) as ViewRef;
  const destroy$ = new Subject();
  viewRef.onDestroy(() => destroy$.next(true));
  return (observable: Observable<T>) => observable.pipe(takeUntil(destroy$));
}

@Component({
  selector: 'subscription-handling',
  template: `
    <h1>Subscription handling component</h1>
    {{ interval$ | async }}
  `,
})
export class SubscriptionHandlingComponent{
  interval$ = interval(1000).pipe(
    takeUntilDestroy$(),
    finalize(() => console.log('Done'))
  );

  /*

  THIS DOSENT WORK. MUST BE CALLED FROM AN INJECTION CONTEXT

  ngOnInit(): void {
    this.interval$ = interval(1000).pipe(
      takeUntilDestroy$(),
      finalize(() => console.log('Done'))
    );
  }
   */
}
