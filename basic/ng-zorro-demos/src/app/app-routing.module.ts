import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'import-plugin',
    loadChildren: () =>
      import('./pages/import-plugin/import-plugin.module').then(
        (m) => m.ImportPluginModule
      ),
  },
  {
    path: 'widget',
    loadChildren: () =>
      import('./pages/widget/widget.module').then((m) => m.WidgetModule),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./pages/table/table.module').then((m) => m.TableModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
