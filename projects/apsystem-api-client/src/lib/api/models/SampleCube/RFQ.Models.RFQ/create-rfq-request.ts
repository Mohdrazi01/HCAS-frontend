/* tslint:disable */
import { RfqOverviewModel as SampleCubeRfqModelsRfqRfqOverviewModel } from '../../SampleCube/RFQ.Models.RFQ/rfq-overview-model';
import { RfqRequestMarketModel as SampleCubeRfqModelsRfqRfqRequestMarketModel } from '../../SampleCube/RFQ.Models.RFQ/rfq-request-market-model';
export interface CreateRfqRequest {
  rfQ_Markets?: null | Array<SampleCubeRfqModelsRfqRfqRequestMarketModel>;
  rfqOverview?: SampleCubeRfqModelsRfqRfqOverviewModel;
}
