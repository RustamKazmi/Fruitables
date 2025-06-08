import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCardsComponent } from './discount-cards.component';

describe('DiscountCardsComponent', () => {
  let component: DiscountCardsComponent;
  let fixture: ComponentFixture<DiscountCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
