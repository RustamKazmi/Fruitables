import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshFruitsPanelComponent } from './fresh-fruits-panel.component';

describe('FreshFruitsPanelComponent', () => {
  let component: FreshFruitsPanelComponent;
  let fixture: ComponentFixture<FreshFruitsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreshFruitsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshFruitsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
