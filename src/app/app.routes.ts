import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/timesheet/timesheet.routes')
        .then(m => m.TIMESHEET_ROUTES)
  }
];
