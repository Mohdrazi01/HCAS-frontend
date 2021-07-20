/* tslint:disable */
import { InvoiceApproverDetails as SampleCubeRfqModelsInvoiceInvoiceApproverDetails } from '../../SampleCube/RFQ.Models.Invoice/invoice-approver-details';
export interface PoApproverDetails {
  invoiceApprover?: null | string;
  invoiceManagerApprover?: null | string;
  items?: null | Array<SampleCubeRfqModelsInvoiceInvoiceApproverDetails>;
  poApproverEmail?: null | string;
  poNumber?: null | string;
  poStatus?: null | string;
  poStatusId?: number;
}
