import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetRoutingModule } from './widget-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetComponent } from './widget.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { FormComponent } from './modal-form/form/form.component';
import { SelectComponent } from './select/select.component';
import { TimeFilterSelectComponent } from './select/time-filter-select/time-filter-select.component';
import { TableComponent } from './table/table.component';
import { AutoHeightTableComponent } from './table/auto-height-table/auto-height-table.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    WidgetComponent,
    ModalFormComponent,
    FormComponent,
    SelectComponent,
    TimeFilterSelectComponent,
    TableComponent,
    AutoHeightTableComponent,
    TreeComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    WidgetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class WidgetModule {}
