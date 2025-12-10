import { CdkStepperModule } from '@angular/cdk/stepper';
import { Component, signal } from '@angular/core';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { NgxStepperComponent } from 'ngx-stepper-component';

@Component({
  selector: 'app-root',
  imports: [CdkStepperModule,
    NgxStepperComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ngx-stepper');
}
