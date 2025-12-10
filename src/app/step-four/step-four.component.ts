import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss'],
  imports: [ReactiveFormsModule, CdkStepperModule, CommonModule]
})
export class StepFourComponent implements OnInit {
  public stepFourForm: FormGroup;
  state: string|undefined;

  constructor(private fb: FormBuilder) {
    this.stepFourForm = this.fb.group({
      phoneNumber: this.fb.control(''),
      email: this.fb.control('')
    });
  }

  ngOnInit(): void {
  }

  stepFourSubmit() {
    this.state = 'done';
  }

}
