import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportPluginRoutingModule } from './import-plugin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { GojsAngularModule } from 'gojs-angular';

import { ImportPluginComponent } from './import-plugin.component';
import { EchartsComponent } from './echarts/echarts.component';
import { GojsComponent } from './gojs/gojs.component';
import { PreviewFileComponent } from './preview-file/preview-file.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';

@NgModule({
  declarations: [
    ImportPluginComponent,
    EchartsComponent,
    GojsComponent,
    PreviewFileComponent,
    RichTextEditorComponent,
  ],
  imports: [
    CommonModule,
    ImportPluginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    GojsAngularModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class ImportPluginModule {}
