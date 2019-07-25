import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdToolkitPage } from './pwd-toolkit.page';

describe('PwdToolkitPage', () => {
  let component: PwdToolkitPage;
  let fixture: ComponentFixture<PwdToolkitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdToolkitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdToolkitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
