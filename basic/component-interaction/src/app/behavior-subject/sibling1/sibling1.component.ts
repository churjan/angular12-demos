import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.scss'],
})
export class Sibling1Component implements OnInit, OnDestroy {
  message = '';
  subscription!: Subscription;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
