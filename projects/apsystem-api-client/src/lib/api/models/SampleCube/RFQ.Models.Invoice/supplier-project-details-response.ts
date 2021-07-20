/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { SupplierProjectDetails as SampleCubeRfqModelsInvoiceSupplierProjectDetails } from '../../SampleCube/RFQ.Models.Invoice/supplier-project-details';
export interface SupplierProjectDetailsResponse {
  appError?: SampleCubeRfqModelsAppError;
  companyId?: number;
  currency?: null | string;
  currencyId?: number;
  items?: null | Array<SampleCubeRfqModelsInvoiceSupplierProjectDetails>;
  locationId?: number;
  locationNSInternalId?: number;
  locationName?: null | string;
  pmToolsLocationId?: number;
  subsidiaryNSInternalId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
