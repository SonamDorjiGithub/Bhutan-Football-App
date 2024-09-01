import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtournPage } from './newtourn.page';

describe('NewtournPage', () => {
  let component: NewtournPage;
  let fixture: ComponentFixture<NewtournPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtournPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtournPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
