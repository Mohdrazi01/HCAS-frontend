/* tslint:disable */
import { TimeSpan as SystemTimeSpan } from '../../System/time-span';
export interface BookingAppointment {
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
