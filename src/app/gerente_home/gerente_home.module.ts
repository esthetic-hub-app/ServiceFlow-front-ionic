import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Gerente_homePageRoutingModule } from './gerente_home-routing.module';
import { Gerente_homePage } from './gerente_home.page';

// COMPONENT IMPORTS
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gerente_homePageRoutingModule,
  ],
  declarations: [Gerente_homePage]
})
export class Gerente_homePageModule {}
