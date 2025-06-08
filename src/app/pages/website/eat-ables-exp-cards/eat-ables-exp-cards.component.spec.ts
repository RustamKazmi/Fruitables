import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatAblesExpCardsComponent } from './eat-ables-exp-cards.component';

describe('EatAblesExpCardsComponent', () => {
  let component: EatAblesExpCardsComponent;
  let fixture: ComponentFixture<EatAblesExpCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EatAblesExpCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EatAblesExpCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
