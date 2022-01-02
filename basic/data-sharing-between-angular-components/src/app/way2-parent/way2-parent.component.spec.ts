import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Way2ParentComponent } from './way2-parent.component';

describe('Way2ParentComponent', () => {
  let component: Way2ParentComponent;
  let fixture: ComponentFixture<Way2ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Way2ParentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Way2ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
