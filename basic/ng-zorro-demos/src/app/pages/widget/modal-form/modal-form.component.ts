import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent implements OnInit {
  FormComponent!:NzModalRef

  constructor(private modalService: NzModalService) {}

  ngOnInit(): void {}

  onShowModal(){
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: FormComponent
    });
  }
}
