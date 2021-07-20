/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { RfqAdditionalCostModel as SampleCubeRfqModelsRfqRfqAdditionalCostModel } from '../../SampleCube/RFQ.Models.RFQ/rfq-additional-cost-model';
export interface RfqAdditionalCostListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  rfqAdditionalCostModels?: null | Array<SampleCubeRfqModelsRfqRfqAdditionalCostModel>;
  success?: boolean;
  traceIdentifier?: null | string;
}
