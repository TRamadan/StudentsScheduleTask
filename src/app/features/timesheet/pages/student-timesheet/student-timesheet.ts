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
  studentId = signal('');
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




  
}
