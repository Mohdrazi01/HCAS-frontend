/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { ShippingAddressListItem as SampleCubeRfqModelsInvoiceShippingAddressListItem } from '../../SampleCube/RFQ.Models.Invoice/shipping-address-list-item';
export interface ShippingAddressListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsInvoiceShippingAddressListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
