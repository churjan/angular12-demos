import { NgModule } from '@angular/core';
import { WangEditor5Module } from './wang-editor5/wang-editor5.module';
import { CategoryModule } from './category/category.module';
@NgModule({
  exports: [WangEditor5Module, CategoryModule],
})
export class ComponentsModule {}
