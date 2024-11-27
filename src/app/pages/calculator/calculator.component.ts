import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { StepperComponent } from '../../shared/stepper/stepper.component';
import * as bootstrap from 'bootstrap';
import { RateCalculatorComponent } from './components/rate-calculator/rate-calculator.component';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    HeaderComponent,
    StepperComponent,
    RateCalculatorComponent,
    CommonModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements AfterViewInit, OnInit {
  isBlurred = false;

  ngAfterViewInit() {
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.dropdownState$.subscribe((state) => {
      console.log('Dropdown State:', state);
      this.isBlurred = state;
    });
  }

  closeOverlay() {
    this.isBlurred = false;
  }
}
