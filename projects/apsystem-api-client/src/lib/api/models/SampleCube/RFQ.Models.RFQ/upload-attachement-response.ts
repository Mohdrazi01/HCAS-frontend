/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface UploadAttachementResponse {
  appError?: SampleCubeRfqModelsAppError;
  rfqFileId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
