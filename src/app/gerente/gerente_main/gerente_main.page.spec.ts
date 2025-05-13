import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gerente_mainPage } from './gerente_main.page';

describe('Gerente_mainPage', () => {
  let component: Gerente_mainPage;
  let fixture: ComponentFixture<Gerente_mainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Gerente_mainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
