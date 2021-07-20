/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface CreateInvoiceResponse {
  appError?: SampleCubeRfqModelsAppError;
  invoiceId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
