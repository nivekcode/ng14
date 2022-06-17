import {Component, inject} from "@angular/core";
import {FOO} from "./app.component";

@Component({
  selector: 'my-comp',
  template: `My component: {{foo}}`
})
export class MyComponent {
  foo = inject(FOO);
}
