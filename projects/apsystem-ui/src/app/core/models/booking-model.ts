/* tslint:disable */
import { TimeSpan as SystemTimeSpan } from 'c:/Projects/ApSystem.APP/ApSystem.APP/projects/apsystem-api-client/src/lib/api/models/System/time-span';
import { AppError } from '../../../../../apsystem-api-client/src/lib/api/models/app-error';
export class BookingModel {
  apStatus?: null | string;
  appointmentDate?: null | string;
  appointmentEndTime?: string;
  appointmentID?: null | number;
  appointmentStartTime?: string;
  appointmentType?: null | string;
  appointmentTypeID?: null | number;
  bookingID?: number;
  doctorID?: null | number;
  doctorName?: null | string;
  patientID?: null | number;
  patientName?: null | string;
  patientEmail?: null | string;
  doctorEmail?: null | string;
  phoneNumber?: null | string;
  problemDiscription?: null | string;
  statusID?: null | number;
  traceIdentifier?: null | string;
  success?: boolean;
  appError?: AppError;
}
