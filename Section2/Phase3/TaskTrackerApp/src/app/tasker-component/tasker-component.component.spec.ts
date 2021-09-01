import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskerComponentComponent } from './tasker-component.component';

describe('TaskerComponentComponent', () => {
  let component: TaskerComponentComponent;
  let fixture: ComponentFixture<TaskerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
