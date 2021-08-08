import { AppError } from '../../../../../apsystem-api-client/src/lib/api/models/app-error';
export class AppointmentType {
  apHistoryID?: null | number;
  appError?: AppError;
  appointmentTypeID?: number;
  appointmentType?: null | string;
  success?: boolean;
  traceIdentifier?: null | string;
}
