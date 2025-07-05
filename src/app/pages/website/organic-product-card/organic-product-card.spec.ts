import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicProductCard } from './organic-product-card';

describe('OrganicProductCard', () => {
  let component: OrganicProductCard;
  let fixture: ComponentFixture<OrganicProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganicProductCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganicProductCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
