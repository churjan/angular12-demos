import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DynamicColumnComponent } from './dynamic-column/dynamic-column.component';
const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'dynamic-column', component: DynamicColumnComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableRoutingModule {}
