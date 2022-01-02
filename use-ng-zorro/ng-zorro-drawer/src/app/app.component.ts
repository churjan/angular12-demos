import { Component } from '@angular/core';
import { EditFormComponent } from './edit-form/edit-form.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private drawerService: NzDrawerService) {}

  openComponent(): void {
    this.drawerService.create({
      nzTitle: 'Component',
      nzContent: EditFormComponent,
    });
  }
}
