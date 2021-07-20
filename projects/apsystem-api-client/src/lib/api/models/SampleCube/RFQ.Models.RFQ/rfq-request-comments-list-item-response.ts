/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { RfqRequestCommentResponse as SampleCubeRfqModelsRfqRfqRequestCommentResponse } from '../../SampleCube/RFQ.Models.RFQ/rfq-request-comment-response';
export interface RfqRequestCommentsListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsRfqRfqRequestCommentResponse>;
  success?: boolean;
  traceIdentifier?: null | string;
}
