import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthPage } from './user-auth.page';

describe('UserAuthPage', () => {
  let component: UserAuthPage;
  let fixture: ComponentFixture<UserAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
