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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
