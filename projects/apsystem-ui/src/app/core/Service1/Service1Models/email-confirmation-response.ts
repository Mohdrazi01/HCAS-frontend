/* tslint:disable */
import { AppError } from "./app-error";
export interface EmailConfirmationResponse {
  appError?: AppError;
  emailConfirmatoon?: boolean;
  success?: boolean;
  traceIdentifier?: null | string;
}
