import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickcupCallPage } from './pickcup-call.page';

const routes: Routes = [
  {
    path: '',
    component: PickcupCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickcupCallPageRoutingModule {}
