/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface PurchaseOrderPdfDocumentResponse {
  appError?: SampleCubeRfqModelsAppError;
  fileName?: null | string;
  pdfDocument?: null | string;
  success?: boolean;
  traceIdentifier?: null | string;
}
