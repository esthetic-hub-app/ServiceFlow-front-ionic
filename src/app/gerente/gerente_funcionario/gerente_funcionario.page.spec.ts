import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gerente_funcionarioPage } from './gerente_funcionario.page';

describe('Gerente_funcionarioPage', () => {
  let component: Gerente_funcionarioPage;
  let fixture: ComponentFixture<Gerente_funcionarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Gerente_funcionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
