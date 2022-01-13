import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandTableComponent } from './expand-table.component';

describe('ExpandTableComponent', () => {
  let component: ExpandTableComponent;
  let fixture: ComponentFixture<ExpandTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
