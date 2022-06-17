import {
  Component,
  InjectionToken,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

export const FOO = new InjectionToken<string>('Foo token');

@Component({
  selector: 'ng14-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('template', { static: true, read: TemplateRef })
  template!: TemplateRef<never>;

  constructor(private vcr: ViewContainerRef) {}

  ngOnInit(): void {
    this.vcr.createEmbeddedView(
      this.template,
      {},
      {
        injector: Injector.create({
          providers: [
            {
              provide: FOO,
              useValue: 'foo',
            },
          ],
        }),
      }
    );
    this.vcr.createEmbeddedView(
      this.template,
      {},
      {
        injector: Injector.create({
          providers: [
            {
              provide: FOO,
              useValue: 'bar',
            },
          ],
        }),
      }
    );
  }
}
