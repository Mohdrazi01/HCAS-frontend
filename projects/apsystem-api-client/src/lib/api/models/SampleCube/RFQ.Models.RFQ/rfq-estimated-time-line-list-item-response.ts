/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { RfqEstimatedTimeLineModel as SampleCubeRfqModelsRfqRfqEstimatedTimeLineModel } from '../../SampleCube/RFQ.Models.RFQ/rfq-estimated-time-line-model';
export interface RfqEstimatedTimeLineListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  rfqEstimatedTimeLineModels?: null | Array<SampleCubeRfqModelsRfqRfqEstimatedTimeLineModel>;
  success?: boolean;
  traceIdentifier?: null | string;
}
