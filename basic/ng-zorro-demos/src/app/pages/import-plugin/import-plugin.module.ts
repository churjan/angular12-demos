import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportPluginRoutingModule } from './import-plugin-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { GojsAngularModule } from 'gojs-angular';

import { ImportPluginComponent } from './import-plugin.component';
import { EchartsComponent } from './echarts/echarts.component';
import { GojsComponent } from './gojs/gojs.component';

@NgModule({
  declarations: [ImportPluginComponent, EchartsComponent, GojsComponent],
  imports: [
    CommonModule,
    ImportPluginRoutingModule,
    GojsAngularModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class ImportPluginModule {}
