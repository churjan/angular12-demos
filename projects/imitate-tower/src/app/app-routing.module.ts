import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { StageComponent } from './stage/stage.component';

const routes: Routes = [
  {
    path: 'edit-task',
    component: EditTaskComponent,
  },
  {
    path: 'stage',
    component: StageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
