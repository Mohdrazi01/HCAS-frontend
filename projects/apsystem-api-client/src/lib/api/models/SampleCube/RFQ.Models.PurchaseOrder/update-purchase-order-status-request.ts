/* tslint:disable */
export interface UpdatePurchaseOrderStatusRequest {
  amountTypeId?: number;
  approverType?: null | string;
  emailSendDate?: string;
  ipAddress?: null | string;
  isRevised?: boolean;
  managerEmail?: null | string;
  poApproved?: null | string;
  poCreatorEmail?: null | string;
  poCreatorName?: null | string;
  purchaseOrderId?: number;
  remarks?: null | string;
  statusId?: number;
  supplierId?: number;
  updatedBy?: number;
}
