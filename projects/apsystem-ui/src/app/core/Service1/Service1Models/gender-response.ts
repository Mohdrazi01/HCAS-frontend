/* tslint:disable */
import { AppError } from "./app-error";
export interface GenderResponse {
  appError?: AppError;
  genderId?: number;
  genderName?: null | string;
  success?: boolean;
  traceIdentifier?: null | string;
}
