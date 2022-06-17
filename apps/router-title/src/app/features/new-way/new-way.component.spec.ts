import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWayComponent } from './new-way.component';

describe('NewWayComponent', () => {
  let component: NewWayComponent;
  let fixture: ComponentFixture<NewWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
