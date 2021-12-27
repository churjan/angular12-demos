import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-dynamic-form-item',
  templateUrl: './dynamic-form-item.component.html',
  styleUrls: ['./dynamic-form-item.component.scss'],
})
export class DynamicFormItemComponent implements OnInit {
  orderForm!: FormGroup;
  items!: FormArray;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      customerName: '',
      email: '',
      items: this.fb.array([this.createItem()]),
    });
  }
  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: '',
    });
  }
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
}
