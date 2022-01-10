import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'how-to-call-a-function-in-another-component-angular-using-rxjs',
    loadChildren: () =>
      import(
        './how-to-call-a-function-in-another-component-angular-using-rxjs/how-to-call-a-function-in-another-component-angular-using-rxjs.module'
      ).then(
        (m) => m.HowToCallAFunctionInAnotherComponentAngularUsingRxjsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
