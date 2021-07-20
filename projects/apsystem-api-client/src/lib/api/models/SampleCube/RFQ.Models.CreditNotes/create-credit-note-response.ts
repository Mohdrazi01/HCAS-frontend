/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface CreateCreditNoteResponse {
  appError?: SampleCubeRfqModelsAppError;
  crediteNoteId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
}
