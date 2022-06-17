import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldWayComponent } from './old-way.component';

describe('OldWayComponent', () => {
  let component: OldWayComponent;
  let fixture: ComponentFixture<OldWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
