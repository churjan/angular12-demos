import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'subject',
    loadChildren: () =>
      import('./subject/subject.module').then((m) => m.SubjectModule),
  },
  {
    path: 'behavior-subject',
    loadChildren: () =>
      import('./behavior-subject/behavior-subject.module').then(
        (m) => m.BehaviorSubjectModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
