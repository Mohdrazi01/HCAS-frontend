/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface DiscountDetailsResponse {
  appError?: SampleCubeRfqModelsAppError;
  clientDiscount?: number;
  clientDiscoutApplied?: number;
  clientProgram?: null | string;
  clientProgramId?: number;
  endClientDiscount?: number;
  endClientDiscountApplied?: number;
  endClientProgram?: null | string;
  endClientProgramId?: number;
  jobLocation?: null | string;
  jobLocationId?: number;
  maxDiscount?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
