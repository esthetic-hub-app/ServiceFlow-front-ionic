import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Gerente_funcionarioPageRoutingModule } from './gerente_funcionario-routing.module';
import { Gerente_funcionarioPage } from './gerente_funcionario.page';

// COMPONENT IMPORTS
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gerente_funcionarioPageRoutingModule,
  ],
  declarations: [Gerente_funcionarioPage]
})
export class Gerente_funcionarioPageModule {}
