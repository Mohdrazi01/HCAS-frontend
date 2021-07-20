/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { EmployeeListItem as SampleCubeRfqModelsInvoiceEmployeeListItem } from '../../SampleCube/RFQ.Models.Invoice/employee-list-item';
export interface InvoiceEmployeeListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsInvoiceEmployeeListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
