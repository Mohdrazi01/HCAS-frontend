/* tslint:disable */
import { AppError } from "./app-error";
export interface AppointmentwithSlotsjoin {
  appError?: AppError;
  appointmentDate?: null | string;
  appointmentEndTime?: null | string;
  appointmentID?: number;
  appointmentSlotID?: number;
  appointmentStartTime?: null | string;
  appointmentTimeSlots?: null | number;
  doctorID?: null | number;
  email?: null | string;
  name?: null | string;
  success?: boolean;
  traceIdentifier?: null | string;
  userID?: number;
}
