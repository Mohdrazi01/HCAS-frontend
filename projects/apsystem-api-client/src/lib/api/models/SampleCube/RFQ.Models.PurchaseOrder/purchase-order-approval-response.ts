/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface PurchaseOrderApprovalResponse {
  amountTypeId?: number;
  appError?: SampleCubeRfqModelsAppError;
  approverType?: null | string;
  emailId?: null | string;
  emailSendDate?: string;
  expiryDate?: string;
  isRevised?: boolean;
  managerApproved?: boolean;
  poCreatorEmail?: null | string;
  poCreatorName?: null | string;
  poNumber?: null | string;
  poUpdatedOn?: string;
  purchaseOrderId?: number;
  statusId?: number;
  success?: boolean;
  supplierId?: number;
  traceIdentifier?: null | string;
}
