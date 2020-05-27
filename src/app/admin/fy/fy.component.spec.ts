/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FyComponent } from './fy.component';

describe('FyComponent', () => {
  let component: FyComponent;
  let fixture: ComponentFixture<FyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
