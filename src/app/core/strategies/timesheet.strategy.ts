import { Observable } from 'rxjs';
import { StudentRequest } from '../models/student-request.model';
import { StudentResponse } from '../models/student.response';


export interface TimesheetStrategy {
    getStudentTimesheets(request: StudentRequest , sessionID: string): Observable<StudentResponse>;
}