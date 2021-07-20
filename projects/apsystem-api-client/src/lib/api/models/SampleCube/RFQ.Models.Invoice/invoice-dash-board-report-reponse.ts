/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface InvoiceDashBoardReportReponse {
  appError?: SampleCubeRfqModelsAppError;
  success?: boolean;
  total_Approved?: number;
  total_Invoice?: number;
  total_Paid?: number;
  total_PendingApproval?: number;
  total_Rejected?: number;
  traceIdentifier?: null | string;
}
