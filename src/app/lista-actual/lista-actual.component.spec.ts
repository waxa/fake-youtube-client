/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListaActualComponent } from './lista-actual.component';

describe('ListaActualComponent', () => {
  let component: ListaActualComponent;
  let fixture: ComponentFixture<ListaActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
