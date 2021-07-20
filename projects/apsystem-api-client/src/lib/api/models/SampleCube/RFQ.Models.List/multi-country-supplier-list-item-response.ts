/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { MultiCountrySupplierListItem as SampleCubeRfqModelsListMultiCountrySupplierListItem } from '../../SampleCube/RFQ.Models.List/multi-country-supplier-list-item';
export interface MultiCountrySupplierListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsListMultiCountrySupplierListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
