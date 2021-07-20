/* tslint:disable */
import { SupplierPurchaseOrderItemList as SampleCubeRfqModelsPurchaseOrderSupplierPurchaseOrderItemList } from '../../SampleCube/RFQ.Models.PurchaseOrder/supplier-purchase-order-item-list';
export interface SupplierPurchaseOrder {
  approverEmail?: null | string;
  companyId?: number;
  currency?: null | string;
  currencyId?: number;
  items?: null | Array<SampleCubeRfqModelsPurchaseOrderSupplierPurchaseOrderItemList>;
  locationId?: number;
  locationNSInternalId?: number;
  paymentTerms?: number;
  paymentTermsName?: null | string;
  poNumber?: null | string;
  purchaseOrderGuid?: string;
  purchaseOrderId?: number;
  subsidiaryNSInternalId?: number;
}
