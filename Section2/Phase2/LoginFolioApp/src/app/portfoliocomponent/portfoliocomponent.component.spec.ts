import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliocomponentComponent } from './portfoliocomponent.component';

describe('PortfoliocomponentComponent', () => {
  let component: PortfoliocomponentComponent;
  let fixture: ComponentFixture<PortfoliocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
