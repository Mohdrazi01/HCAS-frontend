/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { InvoiceCompanyList as SampleCubeRfqModelsInvoiceInvoiceCompanyList } from '../../SampleCube/RFQ.Models.Invoice/invoice-company-list';
export interface InvoiceCompanyListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsInvoiceInvoiceCompanyList>;
  success?: boolean;
  traceIdentifier?: null | string;
}
