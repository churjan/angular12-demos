import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportPluginComponent } from './import-plugin.component';
import { EchartsComponent } from './echarts/echarts.component';
const routes: Routes = [
  { path: '', component: ImportPluginComponent },
  { path: 'echarts', component: EchartsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportPluginRoutingModule {}
