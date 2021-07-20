/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface InvoiceCompanyList {
  appError?: SampleCubeRfqModelsAppError;
  billingAddress?: null | string;
  companyId?: number;
  companyName?: null | string;
  contactPerson?: null | string;
  email?: null | string;
  glAccountName?: null | string;
  glNumber?: number;
  glnsInternalId?: number;
  isActive?: number;
  isInActive?: number;
  nsInternalId?: number;
  shippingAddress?: null | string;
  shortName?: null | string;
  success?: boolean;
  traceIdentifier?: null | string;
}
