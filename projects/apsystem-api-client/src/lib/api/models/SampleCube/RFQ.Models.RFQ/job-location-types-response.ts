/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { JobLocationTypes as SampleCubeRfqModelsRfqJobLocationTypes } from '../../SampleCube/RFQ.Models.RFQ/job-location-types';
export interface JobLocationTypesResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsRfqJobLocationTypes>;
  success?: boolean;
  traceIdentifier?: null | string;
}
