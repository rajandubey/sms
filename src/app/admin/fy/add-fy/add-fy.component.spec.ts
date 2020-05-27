/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddFyComponent } from './add-fy.component';

describe('AddFyComponent', () => {
  let component: AddFyComponent;
  let fixture: ComponentFixture<AddFyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
