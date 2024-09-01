import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootbalFullAdminPage } from './footbal-full-admin.page';

describe('FootbalFullAdminPage', () => {
  let component: FootbalFullAdminPage;
  let fixture: ComponentFixture<FootbalFullAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootbalFullAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootbalFullAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
