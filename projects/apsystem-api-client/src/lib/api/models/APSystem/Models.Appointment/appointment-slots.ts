/* tslint:disable */
import { AppError } from '../../app-error';
export interface AppointmentSlots {
  appError?: AppError;
  appointmentEndTime?: null | string;
  appointmentSlotID?: number;
  appointmentStartTime?: null | string;
  success?: boolean;
  traceIdentifier?: null | string;
}
