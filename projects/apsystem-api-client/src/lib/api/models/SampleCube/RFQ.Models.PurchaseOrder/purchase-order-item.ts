/* tslint:disable */
import { ItemList as SampleCubeRfqModelsPurchaseOrderItemList } from '../../SampleCube/RFQ.Models.PurchaseOrder/item-list';
export interface PurchaseOrderItem {
  basePrice?: number;
  createdBy?: number;
  createdOn?: string;
  isActive?: boolean;
  item?: null | string;
  itemDescription?: null | string;
  itemId?: number;
  itemLists?: null | Array<SampleCubeRfqModelsPurchaseOrderItemList>;
  purchaseOrderId?: number;
  purchaseOrderItemId?: number;
  quantity?: number;
  tax?: number;
  taxAmount?: number;
  totalAmount?: number;
  updatedBy?: number;
  updatedOn?: string;
}
