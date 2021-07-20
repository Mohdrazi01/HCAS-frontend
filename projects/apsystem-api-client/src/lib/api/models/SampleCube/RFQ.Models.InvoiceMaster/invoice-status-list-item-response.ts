/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { InvoiceStatusListItem as SampleCubeRfqModelsInvoiceMasterInvoiceStatusListItem } from '../../SampleCube/RFQ.Models.InvoiceMaster/invoice-status-list-item';
export interface InvoiceStatusListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsInvoiceMasterInvoiceStatusListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
