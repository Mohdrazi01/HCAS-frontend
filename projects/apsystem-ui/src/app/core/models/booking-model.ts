/* tslint:disable */
import { TimeSpan as SystemTimeSpan } from 'c:/Projects/ApSystem.APP/ApSystem.APP/projects/apsystem-api-client/src/lib/api/models/System/time-span';
export class BookingModel {
  apStatus?: null | string;
  appointmentDate?: null | string;
  appointmentEndTime?: SystemTimeSpan;
  appointmentID?: null | number;
  appointmentStartTime?: SystemTimeSpan;
  appointmentType?: null | string;
  appointmentTypeID?: null | number;
  bookingID?: number;
  doctorID?: null | number;
  doctorName?: null | string;
  patientID?: null | number;
  patientName?: null | string;
  phoneNumber?: null | string;
  problemDiscription?: null | string;
  statusID?: null | number;
}
