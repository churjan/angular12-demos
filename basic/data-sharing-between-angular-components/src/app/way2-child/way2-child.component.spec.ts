import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Way2ChildComponent } from './way2-child.component';

describe('Way2ChildComponent', () => {
  let component: Way2ChildComponent;
  let fixture: ComponentFixture<Way2ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Way2ChildComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Way2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
