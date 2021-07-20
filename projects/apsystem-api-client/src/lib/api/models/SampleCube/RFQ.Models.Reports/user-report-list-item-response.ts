/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { UserReportListItem as SampleCubeRfqModelsReportsUserReportListItem } from '../../SampleCube/RFQ.Models.Reports/user-report-list-item';
export interface UserReportListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  success?: boolean;
  traceIdentifier?: null | string;
  userReportListItems?: null | Array<SampleCubeRfqModelsReportsUserReportListItem>;
}
