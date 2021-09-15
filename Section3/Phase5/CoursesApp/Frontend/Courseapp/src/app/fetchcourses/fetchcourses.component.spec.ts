import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchcoursesComponent } from './fetchcourses.component';

describe('FetchcoursesComponent', () => {
  let component: FetchcoursesComponent;
  let fixture: ComponentFixture<FetchcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
