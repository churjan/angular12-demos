import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { DynamicColumnComponent } from './dynamic-column/dynamic-column.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    DynamicColumnComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
