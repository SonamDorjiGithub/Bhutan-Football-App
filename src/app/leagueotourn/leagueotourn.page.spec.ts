import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueotournPage } from './leagueotourn.page';

describe('LeagueotournPage', () => {
  let component: LeagueotournPage;
  let fixture: ComponentFixture<LeagueotournPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueotournPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueotournPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
