import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnlineCreditComponent } from './components/online-credit/online-credit.component';
import { AvailableProductsService } from '../../../../services/available-products.service';
import { CustomLabelComponent } from '../../../../shared/custom-label/custom-label.component';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-rate-calculator',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    OnlineCreditComponent,
    CustomLabelComponent
  ],

  templateUrl: './rate-calculator.component.html',
  styleUrl: './rate-calculator.component.css',
})

export class RateCalculatorComponent implements OnInit {
  isFirstSelected: boolean = true;
  isTextVisible: boolean = false;
  openSections: { [key: string]: boolean } = {};
  activeTab: string = 'Laufzeit';
  rates: number[] = [12, 16, 20, 24, 28, 32, 36];
  currentIndex: number = 0;
  maxVisible: number = 3;
  selectedRate: number | null = null;
  page: number = 2;
  selectedIndex: number = 1;
  availableProducts: any[] = [];

  ngOnInit(): void {
    this.availableProductsService.getAvailableProducts().subscribe((res) => {
      this.availableProducts = res;
    });
  }

  constructor(private availableProductsService: AvailableProductsService) {
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  toggleText(section: string) {
    this.openSections[section] = !this.openSections[section];
  }

  get visibleRates(): number[] {
    const start = Math.max(0, Math.min(this.selectedIndex - 1, this.rates.length - 3));
    const end = Math.min(this.rates.length, start + 3);
    return this.rates.slice(start, end);
  }

  prev(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex -= 1;
    }
  }

  next(): void {
    if (this.selectedIndex < this.rates.length) {
      this.selectedIndex += 1;
    }
  }

  selectRate(index: number): void {
    const absoluteIndex = this.rates.indexOf(this.visibleRates[index]);
    this.selectedIndex = absoluteIndex;
  }

  isSelected(index: number): boolean {
    const absoluteIndex = this.rates.indexOf(this.visibleRates[index]);
    return absoluteIndex === this.selectedIndex;
  }
}
