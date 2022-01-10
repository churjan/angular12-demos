import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.scss'],
})
export class Sibling1Component implements OnInit {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  clickMe() {
    this.sharedService.sendClickEvent();
  }
}
