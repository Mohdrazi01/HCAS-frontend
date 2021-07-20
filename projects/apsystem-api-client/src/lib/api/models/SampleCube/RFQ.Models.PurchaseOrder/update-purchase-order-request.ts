/* tslint:disable */
import { ItemLists as SampleCubeRfqModelsPurchaseOrderItemLists } from '../../SampleCube/RFQ.Models.PurchaseOrder/item-lists';
import { SupplierDetails as SampleCubeRfqModelsPurchaseOrderSupplierDetails } from '../../SampleCube/RFQ.Models.PurchaseOrder/supplier-details';
export interface UpdatePurchaseOrderRequest {
  adminStatus?: null | number;
  billingAddress?: null | string;
  companyId?: number;
  contactPerson?: null | string;
  createdBy?: number;
  createdDate?: string;
  currencyId?: number;
  email?: null | string;
  expiryDate?: string;
  isActive?: boolean;
  isRevised?: boolean;
  itemLists?: null | Array<SampleCubeRfqModelsPurchaseOrderItemLists>;
  locationId?: number;
  managerApprover?: null | string;
  name?: null | string;
  paymentTerms?: number;
  poAmount?: number;
  poApprover?: null | string;
  poNumber?: null | string;
  purchaseOrderGuid?: string;
  purchaseOrderId?: number;
  remarks?: null | string;
  shippingAddress?: null | string;
  shortName?: null | string;
  statusId?: number;
  strExpiryDate?: null | string;
  supplierDetails?: SampleCubeRfqModelsPurchaseOrderSupplierDetails;
  supplierId?: number;
  updatedBy?: number;
}
