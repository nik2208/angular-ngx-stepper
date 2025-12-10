# Angular NGX Stepper

A modern Angular stepper/wizard component built on top of [Angular CDK Stepper](https://material.angular.io/cdk/stepper/overview).

This is an updated port of [angular-ng-stepper](https://github.com/gmerabishvili/angular-ng-stepper) by [Giorgi Merabishvili](https://www.linkedin.com/in/giorgi-merabishvili-3719a2121/), modernized for Angular 20+ with standalone components and signals.

## Demo
[StackBlitz](https://stackblitz.com/edit/stackblitz-starters-awqxydfc)

## Description

The ngx-stepper is a simple wizard/stepper component for Angular. It extends the Angular CDK Stepper with a modern, maintainable codebase using Angular's latest features including standalone components, signals, and `@angular/cdk` stepper utilities.

## Getting Started

### Installation

```bash
npm install @angular/cdk ngx-stepper-component
```

### Basic Usage

Import the `NgxStepperComponent` in your component:

```typescript
import { NgxStepperComponent, StepperStep } from 'ngx-stepper';

export class MyStepperComponent {
  steps: StepperStep[] = [
    { label: 'Step 1', content: 'First step content' },
    { label: 'Step 2', content: 'Second step content' },
    { label: 'Step 3', content: 'Third step content' }
  ];

  onStepChanged(index: number) {
    console.log('Step changed to:', index);
  }
}
```

## Development server

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building the Library

To build the ngx-stepper library:

```bash
npm run build
```

This will compile the library and store the build artifacts in the `dist/` directory.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
npm test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## License

MIT - Original work by [Giorgi Merabishvili](https://github.com/gmerabishvili)

## Credits

This project is based on [angular-ng-stepper](https://github.com/gmerabishvili/angular-ng-stepper) and updated for modern Angular versions (20+) with the following improvements:
- Standalone components
- Angular signals for state management
- Modern Angular CDK integration
- Improved TypeScript support
- Enhanced accessibility

## Additional Resources

- [Angular CDK Stepper Documentation](https://material.angular.io/cdk/stepper/overview)
- [Original Project](https://github.com/gmerabishvili/angular-ng-stepper)
- [Angular CLI Overview](https://angular.dev/tools/cli)
