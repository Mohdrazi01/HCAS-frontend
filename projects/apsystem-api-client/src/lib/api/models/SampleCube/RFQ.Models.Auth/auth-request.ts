/* tslint:disable */
import { DeviceType as SampleCubeRfqModelsEnumsDeviceType } from '../../SampleCube/RFQ.Models.Enums/device-type';
export interface AuthRequest {
  browser?: null | string;
  browser_Version?: null | string;
  device?: SampleCubeRfqModelsEnumsDeviceType;
  ipAddress?: null | string;
  os?: null | string;
  password?: null | string;
  userAgent?: null | string;
  userName?: null | string;
}
