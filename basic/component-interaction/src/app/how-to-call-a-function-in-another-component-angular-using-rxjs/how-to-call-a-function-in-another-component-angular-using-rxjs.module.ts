import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowToCallAFunctionInAnotherComponentAngularUsingRxjsRoutingModule } from './how-to-call-a-function-in-another-component-angular-using-rxjs-routing.module';
import { HowToCallAFunctionInAnotherComponentAngularUsingRxjsComponent } from './how-to-call-a-function-in-another-component-angular-using-rxjs.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';

@NgModule({
  declarations: [
    HowToCallAFunctionInAnotherComponentAngularUsingRxjsComponent,
    Sibling1Component,
    Sibling2Component,
  ],
  imports: [
    CommonModule,
    HowToCallAFunctionInAnotherComponentAngularUsingRxjsRoutingModule,
  ],
})
export class HowToCallAFunctionInAnotherComponentAngularUsingRxjsModule {}
