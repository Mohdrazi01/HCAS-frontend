/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { TermsCoditionServiceType as SampleCubeRfqModelsRfqTermsCoditionServiceType } from '../../SampleCube/RFQ.Models.RFQ/terms-codition-service-type';
export interface TermsCoditionServiceTypeListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsRfqTermsCoditionServiceType>;
  success?: boolean;
  traceIdentifier?: null | string;
}
