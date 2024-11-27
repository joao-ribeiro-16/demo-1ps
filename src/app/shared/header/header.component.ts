import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FinancialModalComponent } from './components/financial-modal/financial-modal.component';
import { SharedService } from '../../services/shared.service';
import { CancelModalComponent } from '../../pages/calculator/components/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CancelModalComponent,
    FinancialModalComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isDetailsVisible: boolean = false;
  isModalOpen = false;

  constructor(private sharedService: SharedService) {}

  toggleDetails(): void {
    this.isDetailsVisible = !this.isDetailsVisible;
    this.sharedService.toggleDropdown(this.isDetailsVisible);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  navigateBackToShop() {
    this.isModalOpen = false;
    console.log('Redirecionando para a loja...');
  }
}
