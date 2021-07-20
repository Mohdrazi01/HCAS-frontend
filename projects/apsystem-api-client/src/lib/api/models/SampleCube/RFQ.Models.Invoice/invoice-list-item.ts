/* tslint:disable */
import { InvoiceItems as SampleCubeRfqModelsInvoiceInvoiceItems } from '../../SampleCube/RFQ.Models.Invoice/invoice-items';
export interface InvoiceListItem {
  amount?: number;
  approver?: null | string;
  billingCountry?: null | string;
  categoryId?: number;
  creditNoteAmount?: number;
  currency?: null | string;
  date?: string;
  dueDate?: string;
  invoiceAttachmentId?: number;
  invoiceItems?: null | Array<SampleCubeRfqModelsInvoiceInvoiceItems>;
  invoiceNumber?: null | string;
  manager?: null | string;
  nSurl?: null | string;
  nsFailReason?: null | string;
  nsInternalId?: number;
  nsStatus?: null | string;
  nsStatusID?: number;
  poNumber?: null | string;
  purchaseOrderGUID?: string;
  purchaseOrderId?: number;
  status?: null | string;
  statusId?: number;
  supplierId?: number;
  supplierInvoiceGuid?: string;
  supplierInvoiceId?: null | string;
  supplierName?: null | string;
}
