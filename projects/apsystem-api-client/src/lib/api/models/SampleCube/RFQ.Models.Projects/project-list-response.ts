/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { ProjectDetailsResponse as SampleCubeRfqModelsProjectsProjectDetailsResponse } from '../../SampleCube/RFQ.Models.Projects/project-details-response';
export interface ProjectListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsProjectsProjectDetailsResponse>;
  success?: boolean;
  traceIdentifier?: null | string;
}
