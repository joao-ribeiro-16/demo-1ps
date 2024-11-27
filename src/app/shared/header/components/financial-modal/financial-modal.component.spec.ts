import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialModalComponent } from './financial-modal.component';

describe('FinancialModalComponent', () => {
  let component: FinancialModalComponent;
  let fixture: ComponentFixture<FinancialModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
