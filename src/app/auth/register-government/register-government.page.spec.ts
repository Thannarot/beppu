import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGovernmentPage } from './register-government.page';

describe('RegisterGovernmentPage', () => {
  let component: RegisterGovernmentPage;
  let fixture: ComponentFixture<RegisterGovernmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGovernmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGovernmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
