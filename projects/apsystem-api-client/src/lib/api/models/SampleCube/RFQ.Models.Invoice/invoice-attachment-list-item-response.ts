/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { InvoiceAttachments as SampleCubeRfqModelsInvoiceInvoiceAttachments } from '../../SampleCube/RFQ.Models.Invoice/invoice-attachments';
export interface InvoiceAttachmentListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsInvoiceInvoiceAttachments>;
  success?: boolean;
  traceIdentifier?: null | string;
}
