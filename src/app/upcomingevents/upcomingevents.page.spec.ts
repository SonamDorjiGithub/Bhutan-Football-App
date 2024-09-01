import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingeventsPage } from './upcomingevents.page';

describe('UpcomingeventsPage', () => {
  let component: UpcomingeventsPage;
  let fixture: ComponentFixture<UpcomingeventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingeventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingeventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
