import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoutCardComponent } from './discout-card.component';

describe('DiscoutCardComponent', () => {
  let component: DiscoutCardComponent;
  let fixture: ComponentFixture<DiscoutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoutCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
