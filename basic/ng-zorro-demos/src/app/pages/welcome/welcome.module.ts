import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule,
    NgZorroAntdModule,
    SharedModule,
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
