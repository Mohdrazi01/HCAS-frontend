/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface DashboardReportResponse {
  appError?: SampleCubeRfqModelsAppError;
  success?: boolean;
  total_CloseRfq?: number;
  total_FollowUpRfq?: number;
  total_NewRfq?: number;
  total_OpenRfq?: number;
  total_PassRfq?: number;
  total_RevisionRfq?: number;
  total_Rfq?: number;
  total_SubmittedRfq?: number;
  traceIdentifier?: null | string;
}
