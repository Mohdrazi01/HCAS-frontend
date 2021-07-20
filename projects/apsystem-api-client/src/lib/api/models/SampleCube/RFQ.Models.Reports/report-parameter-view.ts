/* tslint:disable */
import { KeyIntValueString as SampleCubeRfqModelsReportsKeyIntValueString } from '../../SampleCube/RFQ.Models.Reports/key-int-value-string';
import { ReportCollections as SampleCubeRfqModelsReportsReportCollections } from '../../SampleCube/RFQ.Models.Reports/report-collections';
export interface ReportParameterView {
  collection?: null | Array<SampleCubeRfqModelsReportsKeyIntValueString>;
  defaultValue?: null | string;
  id?: number;
  isRequired?: null | boolean;
  paramDescription?: null | string;
  paramId?: number;
  paramKey?: null | string;
  paramName?: null | string;
  paramType?: null | string;
  paramValue?: null | string;
  reportCollection?: SampleCubeRfqModelsReportsReportCollections;
  reportId?: number;
}
