import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdAccountPage } from './pwd-account.page';

describe('PwdAccountPage', () => {
  let component: PwdAccountPage;
  let fixture: ComponentFixture<PwdAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdAccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
