import {Component, OnInit, input, output, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepper, STEPPER_GLOBAL_OPTIONS, StepContentPositionState } from '@angular/cdk/stepper';

export interface StepperStep {
  label: string;
  content: string;
  completed?: boolean;
  state?: 'done' | 'pending';
}

@Component({
  selector: 'ng-stepper',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="stepper">
  <div class="stepper-header">
    <ol class="steps">
      @for(step of steps; track step; let i = $index) {
        <li 
          class="step"
          [class.active]="selectedIndex === i"
          [class.completed]="step.completed && i < selectedIndex"
          [class.done]="step.state === 'done' && i === selectedIndex"
          (click)="selectStep(i)">
          @if(step.stepLabel) {
            <ng-container *ngTemplateOutlet="step.stepLabel.template"></ng-container>
          }
        </li>
      }
    </ol>
  </div>
  <div class="stepper-body">
    @for(step of steps; track step; let i = $index) {
      <div 
        class="content"
        [class.current]="_getAnimationDirection(i) === 'current'"
        [class.previous]="_getAnimationDirection(i) === 'previous'"
        [class.next]="_getAnimationDirection(i) === 'next'">
        <ng-container *ngTemplateOutlet="step.content"></ng-container>
      </div>
    }
  </div>
</div>
`,
  styles: [`
  ng-stepper {
  display: block;
  overflow: hidden; /* Hide everything that doesn't fit the component */

  .stepper-header {
    .steps {
      width: 100%;
      list-style: none;
      display: inline-flex;
      align-items: center;
      margin: 0 auto;

      .step {
        text-align: center;
        font-size: 1em;
        position: relative;
        width: 33.33%;

        .step-bullet {
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          width: 40px;
          background-color: #b3babe;
          border-radius: 50%;
          color: #fff;
          font-size: 1.3rem;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          transition: background-color 300ms ease;
        }

        .step-title {
          position: absolute;
          right: 0;
          bottom: -25px;
          left: 0;
          margin: auto 0;
          white-space: nowrap;
          font-size: 0.9em;
          color: #333;
        }

        &.active .step-bullet {
          background-color: #306bff;
        }

        &.completed .step-bullet {
          background-color: #32e67f;
        }

        &.done .step-bullet {
          background-color: #32e67f;
        }

        &:after {
          /* Creating horizontal line */
          content: "";
          position: absolute;
          width: 100%;
          height: 3px;
          background-color: #b3babe;
          top: 20px;
          left: -50%;
          z-index: -1;
          transition: background-color 300ms ease;
        }

        &:first-child:after {
          content: none;
        }

        &.completed + .step:after {
          background-color: #32e67f;
        }
      }
    }
  }

  .stepper-body {
    margin: 60px auto 25px;
    padding: 1rem;
    position: relative;
    overflow: hidden;

    .content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      opacity: 0;
      pointer-events: none;
      transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1),
                  opacity 500ms cubic-bezier(0.35, 0, 0.25, 1);

      /* Inactive steps positioned off-screen based on their relative position */
      &.previous {
        transform: translateX(-100%);
      }

      &.next {
        transform: translateX(100%);
      }

      /* Current step is visible and centered */
      &.current {
        position: relative;
        opacity: 1;
        transform: translateX(0);
        pointer-events: auto;
      }
    }
  }
}
    `],
  providers: [
    {
      provide: CdkStepper,
      useExisting: NgxStepperComponent,
    },
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class NgxStepperComponent extends CdkStepper implements OnInit {
  readonly stepList = input<StepperStep[]>([]);
  readonly stepChanged = output<number>();

  ngOnInit(): void {
    // Initialize stepper
  }

  selectStep(index: number): void {
    this.selectedIndex = index;
    this.stepChanged.emit(index);
  }
}
