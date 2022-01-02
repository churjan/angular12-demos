import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Way1ChildComponent } from './way1-child.component';

describe('Way1ChildComponent', () => {
  let component: Way1ChildComponent;
  let fixture: ComponentFixture<Way1ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Way1ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Way1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
