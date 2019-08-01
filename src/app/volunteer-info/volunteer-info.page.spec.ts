import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerInfoPage } from './volunteer-info.page';

describe('VolunteerInfoPage', () => {
  let component: VolunteerInfoPage;
  let fixture: ComponentFixture<VolunteerInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
