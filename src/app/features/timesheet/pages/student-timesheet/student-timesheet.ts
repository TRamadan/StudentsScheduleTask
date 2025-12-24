import { Component, signal } from '@angular/core';
import { TimesheetFacade } from '../../../../core/facades/timesheet.facade';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-timesheet',
  imports: [FormsModule],
  templateUrl: './student-timesheet.html',
  styleUrl: './student-timesheet.css',
})
export class StudentTimesheet {
  studentId = signal('1234');
  timeSheet = signal<StudentTimesheet | null>(null);

  
  facade !: TimesheetFacade;
  constructor(private timesheetFacade: TimesheetFacade) {
    this.facade = this.timesheetFacade;
    
  }

  search(): void {
    if (this.studentId) {
      this.facade.loadTimeSheet(this.studentId());
    }
  } 


 isCurrentOrNextClass(cls: { day: string; startTime: string; endTime: string }): boolean {
  const today = new Date().toLocaleString('en', { weekday: 'long' });
  const currentTime = new Date().toTimeString().slice(0, 5); // "HH:mm"
  
  if (cls.day !== today) return false;
  if (currentTime >= cls.startTime && currentTime <= cls.endTime) return true;

  if (currentTime < cls.startTime) return true;

  return false;
}

  
}
