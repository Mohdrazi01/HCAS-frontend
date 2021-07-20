/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { InvoiceListItem as SampleCubeRfqModelsInvoiceInvoiceListItem } from '../../SampleCube/RFQ.Models.Invoice/invoice-list-item';
export interface InvoiceListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsInvoiceInvoiceListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
