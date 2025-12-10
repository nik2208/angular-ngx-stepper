import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
  imports: [ReactiveFormsModule, CdkStepperModule, CommonModule]
})
export class StepTwoComponent implements OnInit {
  public stepTwoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.stepTwoForm = this.fb.group({
      city: this.fb.control(''),
      country: this.fb.control('')
    });
  }

  ngOnInit(): void {
  }

  stepTwoSubmit() {
  }
}
