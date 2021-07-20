/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface CreateCommentResponse {
  appError?: SampleCubeRfqModelsAppError;
  rfqCommentId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
