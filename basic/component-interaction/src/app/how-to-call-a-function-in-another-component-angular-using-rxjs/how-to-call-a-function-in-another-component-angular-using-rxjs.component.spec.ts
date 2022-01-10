import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToCallAFunctionInAnotherComponentAngularUsingRxjsComponent } from './how-to-call-a-function-in-another-component-angular-using-rxjs.component';

describe('HowToCallAFunctionInAnotherComponentAngularUsingRxjsComponent', () => {
  let component: HowToCallAFunctionInAnotherComponentAngularUsingRxjsComponent;
  let fixture: ComponentFixture<HowToCallAFunctionInAnotherComponentAngularUsingRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HowToCallAFunctionInAnotherComponentAngularUsingRxjsComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      HowToCallAFunctionInAnotherComponentAngularUsingRxjsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
