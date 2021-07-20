/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { SupplierPurchaseOrder as SampleCubeRfqModelsPurchaseOrderSupplierPurchaseOrder } from '../../SampleCube/RFQ.Models.PurchaseOrder/supplier-purchase-order';
export interface SupplierPurchaseOrderItemListResponse {
  appError?: SampleCubeRfqModelsAppError;
  success?: boolean;
  supplierPurchaseOrder?: SampleCubeRfqModelsPurchaseOrderSupplierPurchaseOrder;
  traceIdentifier?: null | string;
}
