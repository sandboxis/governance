import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transition2017Component } from './transition-2017.component';

describe('Transition2017Component', () => {
  let component: Transition2017Component;
  let fixture: ComponentFixture<Transition2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transition2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transition2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
