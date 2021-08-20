import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamformspageComponent } from './examformspage.component';

describe('ExamformspageComponent', () => {
  let component: ExamformspageComponent;
  let fixture: ComponentFixture<ExamformspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamformspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamformspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
