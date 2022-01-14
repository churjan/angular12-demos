import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpandTableComponent } from './expand-table/expand-table.component';
import { TreeTableComponent } from './tree-table/tree-table.component';
import { CrudTreeTableComponent } from './crud-tree-table/crud-tree-table.component';

const routes: Routes = [
  {
    path: 'expand-table',
    component: ExpandTableComponent,
  },
  {
    path: 'tree-table',
    component: TreeTableComponent,
  },
  {
    path: 'crud-tree-table',
    component: CrudTreeTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
