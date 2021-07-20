/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface CreditNoteApprovalResponse {
  appError?: SampleCubeRfqModelsAppError;
  approverType?: null | string;
  categoryId?: number;
  creatorEmail?: null | string;
  creditNoteApproverRemarks?: null | string;
  creditNoteId?: number;
  creditNoteNumber?: null | string;
  emailId?: null | string;
  invoiceId?: number;
  invoiceNumber?: null | string;
  managerRemarks?: null | string;
  statusId?: number;
  success?: boolean;
  supplierId?: number;
  traceIdentifier?: null | string;
}
