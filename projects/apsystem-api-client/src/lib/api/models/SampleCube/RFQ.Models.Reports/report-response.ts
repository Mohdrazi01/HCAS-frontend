/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface ReportResponse {
  appError?: SampleCubeRfqModelsAppError;
  downloadLink?: null | string;
  recordCount?: number;
  records?: null | Array<{  }>;
  success?: boolean;
  traceIdentifier?: null | string;
}
