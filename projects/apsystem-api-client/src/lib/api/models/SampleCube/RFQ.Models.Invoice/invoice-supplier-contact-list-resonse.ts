/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { InvoiceSupplierContactListItem as SampleCubeRfqModelsInvoiceInvoiceSupplierContactListItem } from '../../SampleCube/RFQ.Models.Invoice/invoice-supplier-contact-list-item';
export interface InvoiceSupplierContactListResonse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsInvoiceInvoiceSupplierContactListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
