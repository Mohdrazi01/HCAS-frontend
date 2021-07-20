/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { RfqRequestListItem as SampleCubeRfqModelsRfqRfqRequestListItem } from '../../SampleCube/RFQ.Models.RFQ/rfq-request-list-item';
export interface RfqRequestListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsRfqRfqRequestListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
