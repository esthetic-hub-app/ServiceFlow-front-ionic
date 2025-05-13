import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gerente_pagamentoPage } from './gerente_pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: Gerente_pagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gerente_pagamentoPageRoutingModule {}
