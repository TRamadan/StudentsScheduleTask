import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTimesheet } from './student-timesheet';

describe('StudentTimesheet', () => {
  let component: StudentTimesheet;
  let fixture: ComponentFixture<StudentTimesheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTimesheet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTimesheet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
