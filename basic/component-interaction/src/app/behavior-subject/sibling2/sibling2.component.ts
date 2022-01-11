import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.scss'],
})
export class Sibling2Component implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  newMessage() {
    this.dataService.changeMessage('Hello from Sibling');
  }
}
