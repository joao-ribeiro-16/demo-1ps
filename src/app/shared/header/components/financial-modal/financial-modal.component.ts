import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-financial-modal',
  standalone: true,
  imports: [],
  templateUrl: './financial-modal.component.html',
  styleUrl: './financial-modal.component.css',
})
export class FinancialModalComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
