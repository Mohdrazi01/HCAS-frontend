/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { PurchaseListItem as SampleCubeRfqModelsPurchaseOrderPurchaseListItem } from '../../SampleCube/RFQ.Models.PurchaseOrder/purchase-list-item';
export interface PurchaseOrderListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsPurchaseOrderPurchaseListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
