import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { WidgetRoutingModule } from './widget-routing.module';
import { WidgetComponent } from './widget.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { FormComponent } from './modal-form/form/form.component';

@NgModule({
  declarations: [WidgetComponent, ModalFormComponent, FormComponent],
  imports: [NgZorroAntdModule, CommonModule, WidgetRoutingModule],
})
export class WidgetModule {}
