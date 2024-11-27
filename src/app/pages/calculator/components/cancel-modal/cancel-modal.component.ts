import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cancel-modal',
  standalone: true,
  imports: [],
  templateUrl: './cancel-modal.component.html',
  styleUrl: './cancel-modal.component.css',
})
export class CancelModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() backToShop = new EventEmitter<void>();

  continueWithFinancing() {
    this.closeModal.emit(); // Fecha a modal
  }

  goBackToShop() {
    this.backToShop.emit(); // Retorna para a loja
  }
}
