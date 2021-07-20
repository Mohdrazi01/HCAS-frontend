/* tslint:disable */
import { UpdateSupplierResponse as SampleCubeRfqModelsRfqUpdateSupplierResponse } from '../../SampleCube/RFQ.Models.RFQ/update-supplier-response';
export interface OptionUpdateRequest {
  cpC_Discount?: number;
  cpR_Discount?: number;
  cpc_Margin_Per_Display?: number;
  cpr_Margin_Per_Display?: number;
  createdBy?: number;
  createdDate?: string;
  fieldTime?: number;
  id?: number;
  incentive_Admin_Cost_Discount?: number;
  incentive_Discount?: number;
  incentive_Margin_Per_Display?: number;
  ir?: number;
  isActive?: boolean;
  loi?: number;
  old_FieldTime?: number;
  old_IR?: number;
  old_LOI?: number;
  old_RequestedN?: number;
  old_SampleTypeId?: number;
  optionGroupId?: number;
  optionText?: null | string;
  rebate_Margin_Per?: number;
  requestedN?: number;
  researchMethod?: null | string;
  research_Method_Id?: number;
  rfqRequestMarketId?: number;
  rfqSupplierResponse?: null | Array<SampleCubeRfqModelsRfqUpdateSupplierResponse>;
  sampleType?: null | string;
  sampleTypeId?: number;
  sample_Cost_Discount?: number;
  total_Cost?: number;
  total_Cost_Margin_Per_Display?: number;
  updatedBy?: null | number;
}
