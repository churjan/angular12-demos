import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToCallAFunctionInAnotherComponentAngularUsingRxjsComponent } from './how-to-call-a-function-in-another-component-angular-using-rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: HowToCallAFunctionInAnotherComponentAngularUsingRxjsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowToCallAFunctionInAnotherComponentAngularUsingRxjsRoutingModule {}
