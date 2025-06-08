import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicVegComponent } from './organic-veg.component';

describe('OrganicVegComponent', () => {
  let component: OrganicVegComponent;
  let fixture: ComponentFixture<OrganicVegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganicVegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganicVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
