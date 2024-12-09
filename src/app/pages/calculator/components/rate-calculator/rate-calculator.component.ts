import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { OnlineCreditComponent } from './components/online-credit/online-credit.component';
import { AvailableProductsService } from '../../../../services/available-products.service';
import { CustomLabelComponent } from '../../../../shared/custom-label/custom-label.component';

@Component({
  selector: 'app-rate-calculator',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    FooterComponent,
    CommonModule,
    OnlineCreditComponent,
    CustomLabelComponent,
  ],
  templateUrl: './rate-calculator.component.html',
  styleUrl: './rate-calculator.component.css',
})
export class RateCalculatorComponent implements OnInit {
  isFirstSelected: boolean = true;
  isTextVisible: boolean = false;
  openSections: { [key: string]: boolean } = {};
  activeTab: string = 'Laufzeit';
  rates: number[] = [12, 16, 20, 24, 28];
  visibleRates: number[] = [];
  currentIndex: number = 0;
  maxVisible: number = 3;
  selectedRate: number | null = null;

  availableProducts: any[] = [];

  ngOnInit(): void {
    this.availableProductsService.getAvailableProducts().subscribe((res) => {
      this.availableProducts = res;
      console.log(this.availableProducts);
    });
  }

  constructor(private availableProductsService: AvailableProductsService) {
    this.updateVisibleRates();
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  toggleText(section: string) {
    this.openSections[section] = !this.openSections[section];
  }

  updateVisibleRates() {
    this.visibleRates = this.rates.slice(
      this.currentIndex,
      this.currentIndex + this.maxVisible
    );
  }

  slideLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleRates();
    }
  }

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
