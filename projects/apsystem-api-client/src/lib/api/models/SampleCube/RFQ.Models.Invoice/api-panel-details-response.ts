/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { ApiPanelDetails as SampleCubeRfqModelsInvoiceApiPanelDetails } from '../../SampleCube/RFQ.Models.Invoice/api-panel-details';
export interface ApiPanelDetailsResponse {
  apI_Supplier_Billing_Id?: number;
  appError?: SampleCubeRfqModelsAppError;
  approverEmail?: null | string;
  billDescription?: null | string;
  billingId?: number;
  billingNumber?: null | string;
  companyId?: number;
  companyName?: null | string;
  count?: number;
  currency?: null | string;
  currencyId?: number;
  invoiceTypeId?: number;
  isInvoiced?: boolean;
  items?: null | Array<SampleCubeRfqModelsInvoiceApiPanelDetails>;
  locationId?: number;
  locationNSInternalId?: number;
  locationName?: null | string;
  month?: number;
  subsidiaryNSInternalId?: number;
  success?: boolean;
  supplierId?: number;
  supplierName?: null | string;
  traceIdentifier?: null | string;
  year?: number;
}
