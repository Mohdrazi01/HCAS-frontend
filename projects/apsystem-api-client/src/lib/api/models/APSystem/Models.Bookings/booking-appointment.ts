/* tslint:disable */
import { AppError } from '../../app-error';
export interface BookingAppointment {
  apStatus?: null | string;
  appError?: AppError;
  appointmentDate?: null | string;
  appointmentEndTime?: null | string;
  appointmentID?: null | number;
  appointmentStartTime?: null | string;
  appointmentType?: null | string;
  appointmentTypeID?: null | number;
  bookingID?: number;
  doctorEmail?: null | string;
  doctorID?: null | number;
  doctorName?: null | string;
  patientEmail?: null | string;
  patientID?: null | number;
  patientName?: null | string;
  phoneNumber?: null | string;
  problemDiscription?: null | string;
  statusID?: null | number;
  success?: boolean;
  traceIdentifier?: null | string;
}
