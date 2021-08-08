/* tslint:disable */
import { AppError } from '../../../../../apsystem-api-client/src/lib/api/models/app-error';
import { TimeSpan as SystemTimeSpan } from 'c:/Projects/ApSystem.APP/ApSystem.APP/projects/apsystem-api-client/src/lib/api/models/System/time-span';
export class Appointment {
  appointmentDate?: null | string;
  appointmentID?: number;
  appointmentSlotID?: number;
  appointmentTimeSlots?: null | number;
  doctorID?: null | number;
  traceIdentifier?: null | string;
  success?: boolean;
  appError?: AppError;
  appointmentStartTime?: null | string;
  appointmentEndTime?:  null | string;
  email?:null|string;
  doctorName?: null | string;
  userID?: number;
}

