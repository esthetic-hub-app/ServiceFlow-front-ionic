import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gerente_mainPage } from './gerente_main.page';

const routes: Routes = [
  {
    path: '',
    component: Gerente_mainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gerente_mainRoutingModule {}
