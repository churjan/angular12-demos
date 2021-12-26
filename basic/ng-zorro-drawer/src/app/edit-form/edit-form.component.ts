import { Component, OnInit } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  constructor(private drawerRef: NzDrawerRef<string>) {}

  ngOnInit(): void {}

  onClose(): void {
    this.drawerRef.close();
  }
}
