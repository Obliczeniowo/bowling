import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingControlComponent } from './bowling-control.component';

describe('BowlingControlComponent', () => {
  let component: BowlingControlComponent;
  let fixture: ComponentFixture<BowlingControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BowlingControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BowlingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
