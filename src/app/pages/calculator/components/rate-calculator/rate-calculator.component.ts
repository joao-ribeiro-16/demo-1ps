import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { OnlineCreditComponent } from './components/online-credit/online-credit.component';

@Component({
  selector: 'app-rate-calculator',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    FooterComponent,
    CommonModule,
    OnlineCreditComponent,
  ],
  templateUrl: './rate-calculator.component.html',
  styleUrl: './rate-calculator.component.css',
})
export class RateCalculatorComponent {
  isFirstSelected: boolean = true;
  isTextVisible: boolean = false;
  openSections: { [key: string]: boolean } = {};
  activeTab: string = 'Laufzeit'; // Default active tab
  rates: number[] = [12, 16, 20, 24, 28]; // Array of rates
  visibleRates: number[] = []; // Visible rates in the UI
  currentIndex: number = 0; // Index for the visible range
  maxVisible: number = 3; // Maximum number of visible buttons at a time
  selectedRate: number | null = null;

  constructor() {
    this.updateVisibleRates();
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  toggleText(section: string) {
    this.openSections[section] = !this.openSections[section];
  }

  // Update the visible rates based on the current index
  updateVisibleRates() {
    this.visibleRates = this.rates.slice(
      this.currentIndex,
      this.currentIndex + this.maxVisible
    );
  }

  // Slide left
  slideLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleRates();
    }
  }

  // Slide right
  slideRight() {
    if (this.currentIndex + this.maxVisible < this.rates.length) {
      this.currentIndex++;
      this.updateVisibleRates();
    }
  }

  selectRate(rate: number) {
    this.selectedRate = rate;
  }
}
