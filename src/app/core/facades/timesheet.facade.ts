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
            next: (data: StudentResponse) => {
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

    getClassStatus(
        cls: ClassSchedule,
        schedule: ClassSchedule[]
    ): 'current' | 'next' | 'none' {

        const now = new Date();
        const start = new Date(`${cls.date}T${cls.startTime}:00`);
        const end = new Date(`${cls.date}T${cls.endTime}:00`);
        if (now >= start && now <= end) {
            return 'current';
        }
        const nextClass = schedule
            .map(c => ({
                c,
                start: new Date(`${c.date}T${c.startTime}:00`)
            }))
            .filter(x => x.start > now)
            .sort((a, b) => a.start.getTime() - b.start.getTime())[0]?.c;

        if (nextClass === cls) {
            return 'next';
        }

        return 'none';
    }


}