import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaginsPage } from './plagins.page';

const routes: Routes = [
  {
    path: '',
    component: PlaginsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaginsPageRoutingModule {}
