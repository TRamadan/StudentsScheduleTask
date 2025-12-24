import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimesheetStrategy } from '../strategies/timesheet.strategy';
import { StudentRequest } from '../models/student-request.model';
import { StudentResponse } from '../models/student.response';

@Injectable({
  providedIn: 'root',
})
export class Timesheetapi implements TimesheetStrategy {
  private apiUrl = 'https://b646cf70-f3eb-4e02-8284-952e3bc066fd.mock.pstmn.io/student/timesheet';

  constructor(private http: HttpClient) { }
  getStudentTimesheets(request: StudentRequest, sessionId: string): Observable<StudentResponse> {
   const headers = new HttpHeaders({
    sessionID: sessionId
  });
    return this.http.post<StudentResponse>(
    this.apiUrl,
    request,
    { headers }
  );
  }
}
