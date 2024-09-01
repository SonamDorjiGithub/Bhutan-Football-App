import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballChangjijiPage } from './football-changjiji.page';

describe('FootballChangjijiPage', () => {
  let component: FootballChangjijiPage;
  let fixture: ComponentFixture<FootballChangjijiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballChangjijiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballChangjijiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
