/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { DashboardApiPanelDetails as SampleCubeRfqModelsInvoiceDashboardApiPanelDetails } from '../../SampleCube/RFQ.Models.Invoice/dashboard-api-panel-details';
export interface DashboardApiPanelDetailsResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsInvoiceDashboardApiPanelDetails>;
  success?: boolean;
  traceIdentifier?: null | string;
}
