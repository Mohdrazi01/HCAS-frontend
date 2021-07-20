/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { RfqRequestMarketModel as SampleCubeRfqModelsRfqRfqRequestMarketModel } from '../../SampleCube/RFQ.Models.RFQ/rfq-request-market-model';
export interface RfqRequestMarketListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  rfQ_Markets?: null | Array<SampleCubeRfqModelsRfqRfqRequestMarketModel>;
  success?: boolean;
  traceIdentifier?: null | string;
}
