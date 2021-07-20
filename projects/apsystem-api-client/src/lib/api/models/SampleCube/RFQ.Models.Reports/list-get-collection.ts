/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { GetCollection as SampleCubeRfqModelsReportsGetCollection } from '../../SampleCube/RFQ.Models.Reports/get-collection';
export interface ListGetCollection {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsReportsGetCollection>;
  success?: boolean;
  traceIdentifier?: null | string;
}
