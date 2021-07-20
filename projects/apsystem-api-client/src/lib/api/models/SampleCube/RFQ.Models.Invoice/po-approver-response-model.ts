/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface PoApproverResponseModel {
  appError?: SampleCubeRfqModelsAppError;
  poApproverDetailsId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
