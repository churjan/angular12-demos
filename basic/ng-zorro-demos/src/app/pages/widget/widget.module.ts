import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { WidgetComponent } from './widget.component';
import { ModalFormComponent } from './modal-form/modal-form.component';

@NgModule({
  declarations: [WidgetComponent, ModalFormComponent],
  imports: [CommonModule, WidgetRoutingModule],
})
export class WidgetModule {}
