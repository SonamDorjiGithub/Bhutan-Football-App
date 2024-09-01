import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootbalFutsalAdminPage } from './footbal-futsal-admin.page';

describe('FootbalFutsalAdminPage', () => {
  let component: FootbalFutsalAdminPage;
  let fixture: ComponentFixture<FootbalFutsalAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootbalFutsalAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootbalFutsalAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
