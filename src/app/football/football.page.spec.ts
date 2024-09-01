import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballPage } from './football.page';

describe('FootballPage', () => {
  let component: FootballPage;
  let fixture: ComponentFixture<FootballPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
