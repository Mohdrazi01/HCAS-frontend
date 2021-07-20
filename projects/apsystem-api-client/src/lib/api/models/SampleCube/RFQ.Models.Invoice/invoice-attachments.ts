/* tslint:disable */
import { InvoiceAttach as SampleCubeRfqModelsInvoiceInvoiceAttach } from '../../SampleCube/RFQ.Models.Invoice/invoice-attach';
export interface InvoiceAttachments {
  createdBy?: number;
  fileBlob?: null | string;
  fileDescription?: null | string;
  fileExtention?: null | string;
  fileName?: null | string;
  invoiceAttaches?: null | Array<SampleCubeRfqModelsInvoiceInvoiceAttach>;
  invoiceAttachmentId?: number;
  isActive?: boolean;
  updatedBy?: number;
  uplodedBy?: null | string;
  uplodedDate?: string;
}
