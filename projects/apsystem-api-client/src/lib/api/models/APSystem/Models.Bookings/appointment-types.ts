/* tslint:disable */
import { AppError } from '../../app-error';
export interface AppointmentTypes {
  apHistoryID?: null | number;
  appError?: AppError;
  appointmentType?: null | string;
  appointmentTypeID?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
