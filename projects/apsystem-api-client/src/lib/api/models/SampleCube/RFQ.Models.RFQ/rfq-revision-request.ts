/* tslint:disable */
import { RfqSupplierResponseModel as SampleCubeRfqModelsRfqRfqSupplierResponseModel } from '../../SampleCube/RFQ.Models.RFQ/rfq-supplier-response-model';
export interface RfqRevisionRequest {
  bidderName?: null | string;
  rfqGuid?: null | string;
  rfqId?: number;
  rfqName?: null | string;
  rfqSupplierResponse?: null | Array<SampleCubeRfqModelsRfqRfqSupplierResponseModel>;
  subjectName?: null | string;
}
