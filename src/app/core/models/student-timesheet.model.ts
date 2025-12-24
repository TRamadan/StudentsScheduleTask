export interface ClassSchedule {
  day: string;
  startTime: string;
  endTime: string;
    subject: string;

}

export interface StudentTimesheet {
  studentId: string;
  name : string;
  date: string;
  hoursAttended: number;
  classSchedule: ClassSchedule[];
}