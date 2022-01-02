import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Way1ParentComponent } from './way1-parent.component';

describe('Way1ParentComponent', () => {
  let component: Way1ParentComponent;
  let fixture: ComponentFixture<Way1ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Way1ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Way1ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
