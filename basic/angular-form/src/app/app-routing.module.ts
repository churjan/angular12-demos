import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormControlComponent } from './form-control/form-control.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

const routes: Routes = [
  {
    path: 'form-control',
    component: FormControlComponent,
  },
  {
    path: 'form-builder',
    component: FormBuilderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
