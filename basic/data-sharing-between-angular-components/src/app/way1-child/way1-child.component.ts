import { Component, OnInit ,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-way1-child',
  templateUrl: './way1-child.component.html',
  styleUrls: ['./way1-child.component.scss']
})
export class Way1ChildComponent implements OnInit {
  @Input() data!:string;
  @Output() send= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSendData(){
    this.send.emit('Hello Parent!')
  }

}
