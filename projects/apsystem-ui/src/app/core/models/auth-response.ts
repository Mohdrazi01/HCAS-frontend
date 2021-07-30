import { AppError } from '../../../../../apsystem-api-client/src/lib/api/models/app-error';

export class AuthResponse {
  userId?: number;
  userName?: null | string;
  Name?: null | string;
  email?: null | string;
  phoneNo?: null | string;
  roleId?: number;
  isActive?: boolean;
  isAdmin?: boolean;
  success?: boolean;
  traceIdentifier?: null | string;
  appError?: AppError;
  // tslint:disable-next-line: variable-name
  access_Token?: null | string;
   isEmailConfirmed?: boolean;
}
