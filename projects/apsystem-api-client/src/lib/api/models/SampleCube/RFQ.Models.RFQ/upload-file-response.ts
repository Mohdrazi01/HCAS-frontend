/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface UploadFileResponse {
  appError?: SampleCubeRfqModelsAppError;
  fileId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
