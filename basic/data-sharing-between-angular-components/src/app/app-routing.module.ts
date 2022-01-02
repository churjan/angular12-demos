import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Way1ParentComponent } from './way1-parent/way1-parent.component';
import { Way2ParentComponent } from './way2-parent/way2-parent.component';
const routes: Routes = [
  {
    path: 'input-output',
    component: Way1ParentComponent,
  },
  {
    path: 'viewChild',
    component: Way2ParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
