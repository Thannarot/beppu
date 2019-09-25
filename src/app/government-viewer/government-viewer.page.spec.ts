import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentViewerPage } from './government-viewer.page';

describe('GovernmentViewerPage', () => {
  let component: GovernmentViewerPage;
  let fixture: ComponentFixture<GovernmentViewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentViewerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
