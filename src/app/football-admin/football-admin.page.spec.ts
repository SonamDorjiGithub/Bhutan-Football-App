import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdminPage } from './football-admin.page';

describe('FootballAdminPage', () => {
  let component: FootballAdminPage;
  let fixture: ComponentFixture<FootballAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
