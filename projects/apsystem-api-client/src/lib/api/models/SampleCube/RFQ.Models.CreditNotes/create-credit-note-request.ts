/* tslint:disable */
import { CreditNoteAttachments as SampleCubeRfqModelsCreditNotesCreditNoteAttachments } from '../../SampleCube/RFQ.Models.CreditNotes/credit-note-attachments';
import { CreditNoteItems as SampleCubeRfqModelsCreditNotesCreditNoteItems } from '../../SampleCube/RFQ.Models.CreditNotes/credit-note-items';
export interface CreateCreditNoteRequest {
  accountId?: null | number;
  amount?: number;
  categoryId?: number;
  createdBy?: null | number;
  createdOn?: string;
  creditNoteAttachments?: null | Array<SampleCubeRfqModelsCreditNotesCreditNoteAttachments>;
  creditNoteDate?: string;
  creditNoteGUID?: null | string;
  creditNoteId?: number;
  creditNoteNumber?: null | string;
  currencyId?: number;
  frequency?: null | string;
  inv_CreditNoteItems?: null | Array<SampleCubeRfqModelsCreditNotesCreditNoteItems>;
  invoiceId?: number;
  invoiceNumber?: null | string;
  isActive?: null | boolean;
  isNetSuiteUpdated?: boolean;
  paymentTerm?: number;
  poNumber?: null | string;
  projectId?: null | number;
  purchaseOrderId?: null | number;
  remarks?: null | string;
  serviceMonth?: null | string;
  statusId?: number;
  strCreditNoteDate?: null | string;
  supplierId?: number;
  tax?: number;
  updatedBy?: null | number;
  updatedOn?: null | string;
}
