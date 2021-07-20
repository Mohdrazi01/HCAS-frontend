/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface CreateRemoveTagResponse {
  appError?: SampleCubeRfqModelsAppError;
  success?: boolean;
  traceIdentifier?: null | string;
}
