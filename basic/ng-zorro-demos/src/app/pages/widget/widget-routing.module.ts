import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetComponent } from './widget.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { SelectComponent } from './select/select.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: WidgetComponent },
  { path: 'modal-form', component: ModalFormComponent },
  { path: 'select', component: SelectComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetRoutingModule {}
