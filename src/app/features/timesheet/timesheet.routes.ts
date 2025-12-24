import { Routes } from '@angular/router';
import { StudentTimesheet } from './pages/student-timesheet/student-timesheet';

export const TIMESHEET_ROUTES: Routes = [
  {
    path: '',
    component: StudentTimesheet
  }
];
