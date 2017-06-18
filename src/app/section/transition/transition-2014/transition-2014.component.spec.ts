import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transition2014Component } from './transition-2014.component';

describe('Transition2014Component', () => {
  let component: Transition2014Component;
  let fixture: ComponentFixture<Transition2014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transition2014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transition2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
