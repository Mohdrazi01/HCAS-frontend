/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { LocationListItem as SampleCubeRfqModelsInvoiceMasterLocationListItem } from '../../SampleCube/RFQ.Models.InvoiceMaster/location-list-item';
export interface LocationListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsInvoiceMasterLocationListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
