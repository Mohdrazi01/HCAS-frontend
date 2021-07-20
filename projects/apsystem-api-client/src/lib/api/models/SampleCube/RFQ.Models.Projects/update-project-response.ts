/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface UpdateProjectResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
