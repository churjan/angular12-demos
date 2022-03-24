import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImportPluginComponent } from './import-plugin.component';
import { EchartsComponent } from './echarts/echarts.component';
import { GojsComponent } from './gojs/gojs.component';
import { PreviewFileComponent } from './preview-file/preview-file.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
const routes: Routes = [
  { path: '', component: ImportPluginComponent },
  { path: 'echarts', component: EchartsComponent },
  { path: 'gojs', component: GojsComponent },
  { path: 'preview-file', component: PreviewFileComponent },
  { path: 'rich-text-editor', component: RichTextEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportPluginRoutingModule {}
