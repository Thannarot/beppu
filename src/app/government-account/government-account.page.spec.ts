import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentAccountPage } from './government-account.page';

describe('GovernmentAccountPage', () => {
  let component: GovernmentAccountPage;
  let fixture: ComponentFixture<GovernmentAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentAccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
