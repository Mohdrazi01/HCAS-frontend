/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface CreatePurchaseOrderResponse {
  appError?: SampleCubeRfqModelsAppError;
  poNumber?: null | string;
  purchaseOrderId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
