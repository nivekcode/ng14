import {Component, inject} from "@angular/core";
import {GREETING} from "./app.module";

@Component({
  selector: 'foo',
  template: `<h1>Foo component says {{greeting}}</h1>`
})
export class FooComponent {
  greeting = inject(GREETING);
}
