/* tslint:disable */
import { AppError } from '../../app-error';
export interface AuthResponse {
  access_Token?: null | string;
  appError?: AppError;
  email?: null | string;
  fullName?: null | string;
  isActive?: boolean;
  isAdmin?: boolean;
  isEmailConfirmed?: boolean;
  phoneNo?: null | string;
  roleId?: number;
  success?: boolean;
  traceIdentifier?: null | string;
  userId?: number;
  userName?: null | string;
}
