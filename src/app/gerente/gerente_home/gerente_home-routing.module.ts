import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gerente_homePage } from './gerente_home.page';

const routes: Routes = [
  {
    path: '',
    component: Gerente_homePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gerente_homePageRoutingModule {}
