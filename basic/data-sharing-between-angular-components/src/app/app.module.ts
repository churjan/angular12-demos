import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Way1ParentComponent } from './way1-parent/way1-parent.component';
import { Way1ChildComponent } from './way1-child/way1-child.component';
import { Way2ParentComponent } from './way2-parent/way2-parent.component';
import { Way2ChildComponent } from './way2-child/way2-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Way1ParentComponent,
    Way1ChildComponent,
    Way2ParentComponent,
    Way2ChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
