/* tslint:disable */
import { ReportParameterView as SampleCubeRfqModelsReportsReportParameterView } from '../../SampleCube/RFQ.Models.Reports/report-parameter-view';
export interface Report {
  id?: number;
  isRedirected?: boolean;
  parameters?: null | Array<SampleCubeRfqModelsReportsReportParameterView>;
  reportDescription?: null | string;
  reportName?: null | string;
  reportType?: null | string;
}
