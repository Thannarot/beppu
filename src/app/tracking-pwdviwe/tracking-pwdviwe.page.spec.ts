import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingPwdviwePage } from './tracking-pwdviwe.page';

describe('TrackingPwdviwePage', () => {
  let component: TrackingPwdviwePage;
  let fixture: ComponentFixture<TrackingPwdviwePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingPwdviwePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingPwdviwePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
