/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { InvoiceListItem as SampleCubeRfqModelsInvoiceMasterInvoiceListItem } from '../../SampleCube/RFQ.Models.InvoiceMaster/invoice-list-item';
export interface InvoiceListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsInvoiceMasterInvoiceListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
