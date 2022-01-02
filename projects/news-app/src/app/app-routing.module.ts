import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopNewsComponent } from './top-news/top-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
  {
    path: '',
    component: TopNewsComponent,
  },
  {
    path: 'tech',
    component: TechNewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
