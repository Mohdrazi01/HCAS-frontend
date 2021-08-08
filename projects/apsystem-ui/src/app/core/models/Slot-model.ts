/* tslint:disable */
import { TimeSpan as SystemTimeSpan } from 'c:/Projects/ApSystem.APP/ApSystem.APP/projects/apsystem-api-client/src/lib/api/models/System/time-span';
export interface SlotModel {
  appointmentSlotID?: number;
  // appointmentStartTime?: SystemTimeSpan;
  // appointmentEndTime?: SystemTimeSpan;
  appointmentStartTime?:  null |string;
  appointmentEndTime?:  null |string;
}

