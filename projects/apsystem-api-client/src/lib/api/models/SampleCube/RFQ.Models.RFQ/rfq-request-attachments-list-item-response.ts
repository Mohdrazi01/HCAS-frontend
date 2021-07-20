/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { RfqRequestAttachmentResponse as SampleCubeRfqModelsRfqRfqRequestAttachmentResponse } from '../../SampleCube/RFQ.Models.RFQ/rfq-request-attachment-response';
export interface RfqRequestAttachmentsListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsRfqRfqRequestAttachmentResponse>;
  success?: boolean;
  traceIdentifier?: null | string;
}
