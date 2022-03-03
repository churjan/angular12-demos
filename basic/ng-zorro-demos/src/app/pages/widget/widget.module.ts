import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { WidgetRoutingModule } from './widget-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetComponent } from './widget.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { FormComponent } from './modal-form/form/form.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    WidgetComponent,
    ModalFormComponent,
    FormComponent,
    SelectComponent,
  ],
  imports: [
    NgZorroAntdModule,
    CommonModule,
    WidgetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class WidgetModule {}
