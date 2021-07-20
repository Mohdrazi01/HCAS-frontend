/* tslint:disable */
import { RfqSupplierResponseModel as SampleCubeRfqModelsRfqRfqSupplierResponseModel } from '../../SampleCube/RFQ.Models.RFQ/rfq-supplier-response-model';
export interface RfqRequestOptionModel {
  cpC_Discount?: number;
  cpR_Discount?: number;
  cpc_Margin_Per_Display?: number;
  cpr_Margin_Per_Display?: number;
  createdBy?: number;
  createdDate?: string;
  currencyMultiplier?: number;
  fieldTime?: number;
  id?: number;
  incentive_Admin_Cost_Discount?: number;
  incentive_Discount?: number;
  incentive_Margin_Per_Display?: number;
  ir?: number;
  isActive?: boolean;
  loi?: number;
  old_FieldTime?: null | number;
  old_IR?: null | number;
  old_LOI?: null | number;
  old_RequestedN?: null | number;
  old_SampleType?: null | string;
  old_SampleTypeId?: null | number;
  optionGroupId?: number;
  optionText?: null | string;
  rebate_Margin_Per?: number;
  requestedN?: number;
  researchMethod?: null | string;
  research_Method_Id?: number;
  rfqRequestMarketId?: number;
  rfqSupplierResponse?: null | Array<SampleCubeRfqModelsRfqRfqSupplierResponseModel>;
  sampleType?: null | string;
  sampleTypeId?: number;
  sample_Cost_Discount?: number;
  total_Cost?: number;
  total_Cost_Margin_Per_Display?: number;
  updatedBy?: null | number;
}
