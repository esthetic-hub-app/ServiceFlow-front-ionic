import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gerente_homePage } from './gerente_home.page';

describe('Gerente_homePage', () => {
  let component: Gerente_homePage;
  let fixture: ComponentFixture<Gerente_homePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Gerente_homePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
