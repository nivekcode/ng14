import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export function getTodos(): Observable<any> {
  const http = inject(HttpClient);
  return http.get('https://jsonplaceholder.typicode.com/todos');
}

@Component({
  selector: 'ng14-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos$ = getTodos();
  render = false;
}
