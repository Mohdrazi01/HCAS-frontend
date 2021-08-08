import { AppError } from '../../../../../apsystem-api-client/src/lib/api/models/app-error';
export class AppointmentModel {
  appointmentDate?: null | string;
  appointmentID?: number;
  appointmentTimeSlots?: null | number;
  doctorID?: null | number;
  appointmentTimeSlotsArray?: null | Array<number>;
  traceIdentifier?: null | string;
  success?: boolean;
  appError?: AppError;
}
