/* tslint:disable */
import { RfqAdditionalCostModel as SampleCubeRfqModelsRfqRfqAdditionalCostModel } from '../../SampleCube/RFQ.Models.RFQ/rfq-additional-cost-model';
import { RfqEstimatedTimeLineModel as SampleCubeRfqModelsRfqRfqEstimatedTimeLineModel } from '../../SampleCube/RFQ.Models.RFQ/rfq-estimated-time-line-model';
export interface AdditionalCostRequest {
  rfqAdditionalCostModels?: null | Array<SampleCubeRfqModelsRfqRfqAdditionalCostModel>;
  rfqEstimatedTimeLineModels?: null | Array<SampleCubeRfqModelsRfqRfqEstimatedTimeLineModel>;
  rfqGuid?: null | string;
}
