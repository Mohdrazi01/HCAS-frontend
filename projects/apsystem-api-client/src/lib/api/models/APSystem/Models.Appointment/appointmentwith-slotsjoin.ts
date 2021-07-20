/* tslint:disable */
import { TimeSpan as SystemTimeSpan } from '../../System/time-span';
export interface AppointmentwithSlotsjoin {
  appointmentDate?: null | string;
  appointmentEndTime?: SystemTimeSpan;
  appointmentID?: number;
  appointmentSlotID?: number;
  appointmentStartTime?: SystemTimeSpan;
  appointmentTimeSlots?: null | number;
  doctorID?: null | number;
}
