/* tslint:disable */
import { PurchaseOrderItem as SampleCubeRfqModelsPurchaseOrderPurchaseOrderItem } from '../../SampleCube/RFQ.Models.PurchaseOrder/purchase-order-item';
export interface PurchaseListItem {
  adminStatus?: number;
  approver?: null | string;
  createdBy?: number;
  currency?: null | string;
  invoiceApprover?: null | string;
  isPoEdit?: boolean;
  isRevised?: boolean;
  manager?: null | string;
  poAmount?: number;
  poApprover?: null | string;
  poDate?: string;
  poExpiry?: string;
  poNumber?: null | string;
  poTerm?: null | string;
  purchaseOrderGuid?: string;
  purchaseOrderId?: number;
  purchaseOrderItems?: null | Array<SampleCubeRfqModelsPurchaseOrderPurchaseOrderItem>;
  status?: null | string;
  statusId?: number;
  supplierId?: number;
  supplierName?: null | string;
  updatedOn?: string;
}
