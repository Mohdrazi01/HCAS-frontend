/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface BidDetailsResponse {
  appError?: SampleCubeRfqModelsAppError;
  bidId?: number;
  bidManager?: null | string;
  clientId?: number;
  clientName?: null | string;
  clientOwnerId?: number;
  rfq_Id?: number;
  subject?: null | string;
  success?: boolean;
  ticketStatus?: null | string;
  ticketStatusId?: number;
  traceIdentifier?: null | string;
}
