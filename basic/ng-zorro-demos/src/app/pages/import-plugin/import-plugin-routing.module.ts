import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImportPluginComponent } from './import-plugin.component';
import { EchartsComponent } from './echarts/echarts.component';
import { GojsComponent } from './gojs/gojs.component';
import { PreviewFileComponent } from './preview-file/preview-file.component';
const routes: Routes = [
  { path: '', component: ImportPluginComponent },
  { path: 'echarts', component: EchartsComponent },
  { path: 'gojs', component: GojsComponent },
  { path: 'preview-file', component: PreviewFileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportPluginRoutingModule {}
