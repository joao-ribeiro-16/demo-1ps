import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../../../shared/footer/footer.component';

@Component({
  selector: 'app-rate-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule, FooterComponent],
  templateUrl: './rate-calculator.component.html',
  styleUrl: './rate-calculator.component.css',
})
export class RateCalculatorComponent {
  isFirstSelected: boolean = true;
  isTextVisible: boolean = false;
  activeTab: string = 'Laufzeit'; // Default active tab

  openSections: { [key: string]: boolean } = {};

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  toggleText(section: string) {
    this.openSections[section] = !this.openSections[section];
  }
}
