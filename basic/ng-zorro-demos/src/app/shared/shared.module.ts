import { NgModule } from '@angular/core';
import { ModulesModule } from './modules/modules.module';
import { ComponentsModule } from './components/components.module';
@NgModule({
  exports:[
    ModulesModule,
    ComponentsModule,
  ]
})
export class SharedModule { }
