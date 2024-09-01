import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutsalChangjijiPage } from './futsal-changjiji.page';

describe('FutsalChangjijiPage', () => {
  let component: FutsalChangjijiPage;
  let fixture: ComponentFixture<FutsalChangjijiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutsalChangjijiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutsalChangjijiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
