/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { PoApproverDetails as SampleCubeRfqModelsInvoicePoApproverDetails } from '../../SampleCube/RFQ.Models.Invoice/po-approver-details';
export interface InvoicePoApproverDetailsResponse {
  appError?: SampleCubeRfqModelsAppError;
  poApproverDetails?: SampleCubeRfqModelsInvoicePoApproverDetails;
  success?: boolean;
  traceIdentifier?: null | string;
}
