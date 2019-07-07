import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdModelPage } from './pwd-model.page';

describe('PwdModelPage', () => {
  let component: PwdModelPage;
  let fixture: ComponentFixture<PwdModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
