/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface ProjectDetailsResponse {
  appError?: SampleCubeRfqModelsAppError;
  billingCountry?: null | string;
  billingCountryId?: number;
  companyId?: number;
  cost?: number;
  costGLCode?: number;
  costNSInternalId?: number;
  createdOn?: null | string;
  currency?: null | string;
  currencyId?: number;
  isInvoiced?: boolean;
  locationId?: number;
  projectDescription?: null | string;
  projectDetailId?: number;
  projectId?: number;
  projectManagerEmail?: null | string;
  projectManagerId?: number;
  projectManagerName?: null | string;
  projectName?: null | string;
  projectSource?: null | string;
  secondaryProjectManagerEmail?: null | string;
  secondaryProjectManagerId?: number;
  secondaryProjectManagerName?: null | string;
  serviceID?: number;
  serviceName?: null | string;
  success?: boolean;
  supplierId?: number;
  supplierName?: null | string;
  totalCompletes?: number;
  traceIdentifier?: null | string;
}
