/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { PmToolProjectDetailsResponse as SampleCubeRfqModelsProjectsPmToolProjectDetailsResponse } from '../../SampleCube/RFQ.Models.Projects/pm-tool-project-details-response';
export interface PmToolProjectDetailListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsProjectsPmToolProjectDetailsResponse>;
  success?: boolean;
  traceIdentifier?: null | string;
}
