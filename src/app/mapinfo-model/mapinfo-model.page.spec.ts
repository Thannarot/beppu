import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapinfoModelPage } from './mapinfo-model.page';

describe('MapinfoModelPage', () => {
  let component: MapinfoModelPage;
  let fixture: ComponentFixture<MapinfoModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapinfoModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapinfoModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
