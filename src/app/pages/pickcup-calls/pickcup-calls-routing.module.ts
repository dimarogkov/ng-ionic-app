import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickcupCallsPage } from './pickcup-calls.page';

const routes: Routes = [
  {
    path: '',
    component: PickcupCallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickcupCallsPageRoutingModule {}
