import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gerente_pagamentoPage } from './gerente_pagamento.page';

describe('Gerente_pagamentoPage', () => {
  let component: Gerente_pagamentoPage;
  let fixture: ComponentFixture<Gerente_pagamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Gerente_pagamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
