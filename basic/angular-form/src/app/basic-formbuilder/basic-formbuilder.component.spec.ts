import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormbuilderComponent } from './basic-formbuilder.component';

describe('BasicFormbuilderComponent', () => {
  let component: BasicFormbuilderComponent;
  let fixture: ComponentFixture<BasicFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicFormbuilderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
