import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss'],
  imports: [ReactiveFormsModule, CdkStepperModule, CommonModule]
})
export class StepThreeComponent implements OnInit {
  public stepThreeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.stepThreeForm = this.fb.group({
      cardNumber: this.fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  stepThreeSubmit() {
  }
}
