import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStepperComponent } from './ngx-stepper';

describe('NgxStepperComponent', () => {
  let component: NgxStepperComponent;
  let fixture: ComponentFixture<NgxStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxStepperComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
