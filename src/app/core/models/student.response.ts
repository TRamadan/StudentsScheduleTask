import { StudentTimesheet } from "./student-timesheet.model";

export interface StudentResponse {
    status: string;
    message: string;
    count: number;
    data: StudentTimesheet[];
}