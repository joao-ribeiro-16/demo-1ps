import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  steps = 4; // Total steps
  currentStep = 1; // Initial step, can be set to any step as needed

  nextStep() {
    if (this.currentStep < this.steps) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  getProgressWidth() {
    return (this.currentStep / this.steps) * 100 + '%';
  }
}
