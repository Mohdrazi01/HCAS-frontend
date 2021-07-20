/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface CreateRfqResponse {
  appError?: SampleCubeRfqModelsAppError;
  rfqId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
