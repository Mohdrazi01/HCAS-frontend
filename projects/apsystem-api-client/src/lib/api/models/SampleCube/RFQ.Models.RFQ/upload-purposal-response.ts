/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface UploadPurposalResponse {
  appError?: SampleCubeRfqModelsAppError;
  purposalId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
