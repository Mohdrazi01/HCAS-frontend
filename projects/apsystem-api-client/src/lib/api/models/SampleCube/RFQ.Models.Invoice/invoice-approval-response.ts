/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface InvoiceApprovalResponse {
  appError?: SampleCubeRfqModelsAppError;
  approverType?: null | string;
  categoryId?: number;
  creatorEmail?: null | string;
  emailId?: null | string;
  invoiceApproverRemarks?: null | string;
  invoiceNumber?: null | string;
  managerRemarks?: null | string;
  poNumber?: null | string;
  statusId?: number;
  success?: boolean;
  supplierId?: number;
  supplierInvoiceId?: number;
  traceIdentifier?: null | string;
}
