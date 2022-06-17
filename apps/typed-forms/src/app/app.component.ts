import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

export interface Hero {
  name: string;
  universe: 'marvel' | 'dc';
  superpower: string;
}

export interface HeroForm {
  name: FormControl<string>;
  universe: FormControl<string>;
  superpower: FormControl<string>;
}

@Component({
  selector: 'ng14-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  heroForm!: FormGroup<HeroForm>;

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      name: '',
      universe: '',
      superpower: '',
    });

    /*
    NOK, becuase name is a required property. Would only be okay if the property would be optional
    this.heroForm.removeControl('name');
     */
  }
}
