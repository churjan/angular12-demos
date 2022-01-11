import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviorSubjectRoutingModule } from './behavior-subject-routing.module';
import { BehaviorSubjectComponent } from './behavior-subject.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';

@NgModule({
  declarations: [
    BehaviorSubjectComponent,
    Sibling1Component,
    Sibling2Component,
  ],
  imports: [CommonModule, BehaviorSubjectRoutingModule],
})
export class BehaviorSubjectModule {}
