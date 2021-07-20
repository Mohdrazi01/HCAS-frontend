/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface PurchaseOrderDashBoardReportReponse {
  appError?: SampleCubeRfqModelsAppError;
  success?: boolean;
  total_Canceled?: number;
  total_Closed?: number;
  total_DeliveryCompleted?: number;
  total_Open?: number;
  total_PO?: number;
  total_PartiallyDelivered?: number;
  total_PendingApproval?: number;
  total_Rejected?: number;
  traceIdentifier?: null | string;
}
