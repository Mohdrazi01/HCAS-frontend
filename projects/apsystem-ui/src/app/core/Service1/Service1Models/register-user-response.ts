/* tslint:disable */
import { AppError } from "./app-error";
export interface RegisterUserResponse {
  appError?: AppError;
  success?: boolean;
  traceIdentifier?: null | string;
}
