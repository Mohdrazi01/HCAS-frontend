/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface UpdatePurchaseOrderStatusResponse {
  appError?: SampleCubeRfqModelsAppError;
  success?: boolean;
  traceIdentifier?: null | string;
}
