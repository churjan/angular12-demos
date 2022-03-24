import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImportPluginRoutingModule } from './import-plugin-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { GojsAngularModule } from 'gojs-angular';

import { ImportPluginComponent } from './import-plugin.component';
import { EchartsComponent } from './echarts/echarts.component';
import { GojsComponent } from './gojs/gojs.component';
import { PreviewFileComponent } from './preview-file/preview-file.component';

@NgModule({
  declarations: [
    ImportPluginComponent,
    EchartsComponent,
    GojsComponent,
    PreviewFileComponent,
  ],
  imports: [
    CommonModule,
    ImportPluginRoutingModule,
    SharedModule,
    GojsAngularModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class ImportPluginModule {}
