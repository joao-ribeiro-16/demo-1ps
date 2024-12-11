import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnlineCreditComponent } from './components/online-credit/online-credit.component';
import { AvailableProductsService } from '../../../../services/available-products.service';
import { CustomLabelComponent } from '../../../../shared/custom-label/custom-label.component';

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
  rates: { months: number; euros: number }[] = [
    { months: 12, euros: 100 },
    { months: 16, euros: 150 },
    { months: 20, euros: 200 },
    { months: 24, euros: 250 },
    { months: 28, euros: 300 },
    { months: 32, euros: 350 },
    { months: 36, euros: 400 }
  ];
  currentIndex: number = 0;
  maxVisible: number = 3;
  selectedRate: number | null = null;
  page: number = 2;
  selectedIndex: number = 1;
  availableProducts: any[] = [];
  showInMonths: boolean = true;

  ngOnInit(): void {
    this.availableProductsService.getAvailableProducts().subscribe((res) => {
      this.availableProducts = res;
    });
  }

  constructor(private availableProductsService: AvailableProductsService) {
  }

  setActiveTab(tab: string) {
    this.showInMonths = tab === "Laufzeit";
    this.activeTab = tab;
  }

  toggleText(section: string) {
    this.openSections[section] = !this.openSections[section];
  }

  get visibleRates(): { months: number; euros: number }[] {
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
    const visibleRate = this.visibleRates[index];
    const absoluteIndex = this.rates.findIndex(rate => rate === visibleRate);
    if (absoluteIndex !== -1) {
      this.selectedIndex = absoluteIndex;
    }
  }

  isSelected(index: number): boolean {
    const visibleRate = this.visibleRates[index];
    const absoluteIndex = this.rates.findIndex(rate => rate === visibleRate);
    return absoluteIndex === this.selectedIndex;
  }
}
