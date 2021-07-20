/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface DeleteRfqMarketResponse {
  appError?: SampleCubeRfqModelsAppError;
  id?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
