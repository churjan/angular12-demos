import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorSubjectComponent } from './behavior-subject.component';

const routes: Routes = [{ path: '', component: BehaviorSubjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BehaviorSubjectRoutingModule {}
