/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { SupplierPurchaseOrderItem as SampleCubeRfqModelsPurchaseOrderSupplierPurchaseOrderItem } from '../../SampleCube/RFQ.Models.PurchaseOrder/supplier-purchase-order-item';
export interface SupplierPurchaseOrderListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsPurchaseOrderSupplierPurchaseOrderItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
