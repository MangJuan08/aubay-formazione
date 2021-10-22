import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenvenutoPageComponent } from './benvenuto-page.component';

describe('BenvenutoPageComponent', () => {
  let component: BenvenutoPageComponent;
  let fixture: ComponentFixture<BenvenutoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenvenutoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenvenutoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
