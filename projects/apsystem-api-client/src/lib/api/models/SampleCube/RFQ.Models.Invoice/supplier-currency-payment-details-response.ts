/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface SupplierCurrencyPaymentDetailsResponse {
  appError?: SampleCubeRfqModelsAppError;
  currency?: null | string;
  currencyId?: number;
  paymentTerms?: null | string;
  paymentTermsId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
