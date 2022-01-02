import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Way1ParentComponent } from './way1-parent/way1-parent.component';
const routes: Routes = [
  {
    path: 'input-output',
    component:Way1ParentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
