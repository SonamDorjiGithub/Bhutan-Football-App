import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplayerdetailPage } from './teamplayerdetail.page';

describe('TeamplayerdetailPage', () => {
  let component: TeamplayerdetailPage;
  let fixture: ComponentFixture<TeamplayerdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamplayerdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamplayerdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
