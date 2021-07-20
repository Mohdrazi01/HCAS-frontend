/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface NsPostDataResponse {
  appError?: SampleCubeRfqModelsAppError;
  invoiceId?: number;
  message?: null | string;
  nsInterNalID?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
