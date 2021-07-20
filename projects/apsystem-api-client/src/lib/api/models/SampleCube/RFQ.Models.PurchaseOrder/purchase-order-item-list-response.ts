/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { PurchaseOrderItemList as SampleCubeRfqModelsPurchaseOrderPurchaseOrderItemList } from '../../SampleCube/RFQ.Models.PurchaseOrder/purchase-order-item-list';
export interface PurchaseOrderItemListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsPurchaseOrderPurchaseOrderItemList>;
  success?: boolean;
  traceIdentifier?: null | string;
}
