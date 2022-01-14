import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTreeTableComponent } from './crud-tree-table.component';

describe('CrudTreeTableComponent', () => {
  let component: CrudTreeTableComponent;
  let fixture: ComponentFixture<CrudTreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudTreeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
