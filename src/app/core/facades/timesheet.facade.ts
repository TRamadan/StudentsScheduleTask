import { inject, Injectable, signal } from '@angular/core';
import { TimesheetStrategy } from '../strategies/timesheet.strategy';
import { Timesheetapi } from '../services/timesheetapi';
import { ClassSchedule, StudentTimesheet } from '../models/student-timesheet.model';
import { StudentResponse } from '../models/student.response';

@Injectable({ providedIn: 'root' })

export class TimesheetFacade {
    public timesheetData = signal<StudentTimesheet | null>(null);

    loadingTimesheetState = signal<boolean>(false);
    errorLoadingTimesheet = signal<boolean>(false);

    private strategy = inject(Timesheetapi);

    loadTimeSheet(studentId: string) {
        this.loadingTimesheetState.set(true);

        const sessionId = btoa(`${Date.now()}_${studentId}`);
        this.strategy.getStudentTimesheets({ studentId }, sessionId).subscribe({
            next: (data : StudentResponse) => {
                const student = data.data?.[0] ?? null;

                this.timesheetData.set(student); 
                this.loadingTimesheetState.set(false);
            },
            error: () => {
                this.errorLoadingTimesheet.set(true);
                this.loadingTimesheetState.set(false);
            }
        })
    }

getCurrentClass(day: string, time: string) {
  return (cls: { day: string; startTime: string; endTime: string }) =>
    cls.day === day &&
    time >= cls.startTime &&
    time <= cls.endTime;
}

}