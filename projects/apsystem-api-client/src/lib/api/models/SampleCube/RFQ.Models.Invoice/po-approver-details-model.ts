/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
export interface PoApproverDetailsModel {
  alternateEmployeeId?: number;
  amountTypeId?: number;
  appError?: SampleCubeRfqModelsAppError;
  companyId?: number;
  createdBy?: number;
  createdDate?: string;
  employeeId?: number;
  isActive?: boolean;
  isAlternate?: boolean;
  locationId?: number;
  poApproverDetailsGUID?: string;
  poApproverDetailsId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
  updatedBy?: number;
}
