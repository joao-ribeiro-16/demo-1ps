import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-label',
  standalone: true,
  imports: [],
  templateUrl: './custom-label.component.html',
  styleUrl: './custom-label.component.css',
})
export class CustomLabelComponent {
  @Input() label!: string;
  @Input() value!: number;
}
