/* tslint:disable */
import { AppError } from "./app-error";
export interface Appointments {
  appError?: AppError;
  appointmentDate?: null | string;
  appointmentID?: number;
  appointmentTimeSlots?: null | number;
  appointmentTimeSlotsArray?: null | Array<number>;
  doctorID?: null | number;
  success?: boolean;
  traceIdentifier?: null | string;
}
