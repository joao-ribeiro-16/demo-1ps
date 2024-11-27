import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private dropdownState = new BehaviorSubject<boolean>(false);
  dropdownState$ = this.dropdownState.asObservable();

  toggleDropdown(state: boolean) {
    this.dropdownState.next(state);
  }
}
