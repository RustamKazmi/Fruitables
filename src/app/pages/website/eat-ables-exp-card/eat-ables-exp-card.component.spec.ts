import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatAblesExpCardComponent } from './eat-ables-exp-card.component';

describe('EatAblesExpCardComponent', () => {
  let component: EatAblesExpCardComponent;
  let fixture: ComponentFixture<EatAblesExpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EatAblesExpCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EatAblesExpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
