import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpandTableComponent } from './expand-table/expand-table.component';
const routes: Routes = [
  {
    path: 'expand-table',
    component: ExpandTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
