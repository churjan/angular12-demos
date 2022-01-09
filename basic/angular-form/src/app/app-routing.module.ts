import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicFormbuilderComponent } from './basic-formbuilder/basic-formbuilder.component';
const routes: Routes = [
  {
    path: 'basic-formbuilder',
    component: BasicFormbuilderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
