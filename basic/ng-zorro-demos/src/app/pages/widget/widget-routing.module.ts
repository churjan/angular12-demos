import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetComponent } from './widget.component';
import { ModalFormComponent } from './modal-form/modal-form.component';

const routes: Routes = [
  { path: '', component: WidgetComponent },
  { path: 'modal-form', component: ModalFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetRoutingModule {}
