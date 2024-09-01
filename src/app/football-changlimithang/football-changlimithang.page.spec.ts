import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballChanglimithangPage } from './football-changlimithang.page';

describe('FootballChanglimithangPage', () => {
  let component: FootballChanglimithangPage;
  let fixture: ComponentFixture<FootballChanglimithangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballChanglimithangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballChanglimithangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
