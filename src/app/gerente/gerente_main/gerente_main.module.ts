import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Gerente_mainRoutingModule } from './gerente_main-routing.module';
import { Gerente_mainPage } from './gerente_main.page';

// COMPONENT IMPORTS
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gerente_mainRoutingModule,
  ],
  declarations: [Gerente_mainPage]
})
export class Gerente_mainPageModule {}
