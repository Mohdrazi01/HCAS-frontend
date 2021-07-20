/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { RfqEstimateTimeLineListItem as SampleCubeRfqModelsRfqRfqEstimateTimeLineListItem } from '../../SampleCube/RFQ.Models.RFQ/rfq-estimate-time-line-list-item';
export interface RfqEstimatedTimeLineResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsRfqRfqEstimateTimeLineListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
