import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportPluginRoutingModule } from './import-plugin-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';

import { ImportPluginComponent } from './import-plugin.component';
import { EchartsComponent } from './echarts/echarts.component';

@NgModule({
  declarations: [ImportPluginComponent, EchartsComponent],
  imports: [
    CommonModule,
    ImportPluginRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class ImportPluginModule {}
