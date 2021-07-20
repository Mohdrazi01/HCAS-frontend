/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { ReportAccess as SampleCubeRfqModelsReportsReportAccess } from '../../SampleCube/RFQ.Models.Reports/report-access';
export interface GetReportsByAccountResponse {
  appError?: SampleCubeRfqModelsAppError;
  reportDetails?: SampleCubeRfqModelsReportsReportAccess;
  success?: boolean;
  traceIdentifier?: null | string;
}
