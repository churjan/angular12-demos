import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormControlComponent } from './form-control/form-control.component';
import { FormArrayComponent } from './form-array/form-array.component';

const routes: Routes = [
  {
    path: 'form-control',
    component: FormControlComponent,
  },
  {
    path: 'form-array',
    component: FormArrayComponent,
  },
  { path: 'form-builder', loadChildren: () => import('./form-builder/form-builder.module').then(m => m.FormBuilderModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
