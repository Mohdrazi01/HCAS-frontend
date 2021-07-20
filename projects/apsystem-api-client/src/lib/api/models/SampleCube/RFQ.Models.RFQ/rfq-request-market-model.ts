/* tslint:disable */
import { RfqAdditionalCostModel as SampleCubeRfqModelsRfqRfqAdditionalCostModel } from '../../SampleCube/RFQ.Models.RFQ/rfq-additional-cost-model';
import { RfqRequestOptionModel as SampleCubeRfqModelsRfqRfqRequestOptionModel } from '../../SampleCube/RFQ.Models.RFQ/rfq-request-option-model';
export interface RfqRequestMarketModel {
  country_Code?: null | string;
  country_Language?: null | string;
  createdBy?: number;
  createdDate?: string;
  id?: number;
  isActive?: boolean;
  languageId?: number;
  marketName?: null | string;
  qutaDescription?: null | string;
  requestOption?: null | Array<SampleCubeRfqModelsRfqRfqRequestOptionModel>;
  researchMethod?: null | string;
  research_Method_Id?: number;
  rfqAdditionalCost?: null | Array<SampleCubeRfqModelsRfqRfqAdditionalCostModel>;
  rfqId?: number;
  targetAudience?: null | string;
  updatedBy?: null | number;
}
