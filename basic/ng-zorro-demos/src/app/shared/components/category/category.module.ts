import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZorroAntdModule } from '../../modules/zorro-antd.module';

import { CategoryComponent } from './category.component';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  declarations: [CategoryComponent, HighlightPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ZorroAntdModule],
  exports: [CategoryComponent],
})
export class CategoryModule {}
