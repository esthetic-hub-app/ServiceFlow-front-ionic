import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Gerente_pagamentoPageRoutingModule } from './gerente_pagamento-routing.module';
import { Gerente_pagamentoPage } from './gerente_pagamento.page';

// COMPONENT IMPORTS
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gerente_pagamentoPageRoutingModule,
  ],
  declarations: [Gerente_pagamentoPage]
})
export class Gerente_pagamentoPageModule {}
