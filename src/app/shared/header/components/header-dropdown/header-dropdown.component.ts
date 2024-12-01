import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './header-dropdown.component.html',
  styleUrl: './header-dropdown.component.css',
})
export class HeaderDropdownComponent {
  @Input() detailsVisible: boolean = false;
}
