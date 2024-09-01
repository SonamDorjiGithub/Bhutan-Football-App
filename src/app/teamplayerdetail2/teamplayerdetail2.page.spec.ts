import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teamplayerdetail2Page } from './teamplayerdetail2.page';

describe('Teamplayerdetail2Page', () => {
  let component: Teamplayerdetail2Page;
  let fixture: ComponentFixture<Teamplayerdetail2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teamplayerdetail2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teamplayerdetail2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
