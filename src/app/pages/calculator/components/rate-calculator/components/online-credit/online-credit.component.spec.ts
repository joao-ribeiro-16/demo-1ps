import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCreditComponent } from './online-credit.component';

describe('OnlineCreditComponent', () => {
  let component: OnlineCreditComponent;
  let fixture: ComponentFixture<OnlineCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineCreditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
