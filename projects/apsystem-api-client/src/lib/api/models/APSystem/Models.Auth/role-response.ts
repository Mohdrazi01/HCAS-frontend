/* tslint:disable */
import { AppError } from '../../app-error';
export interface RoleResponse {
  appError?: AppError;
  roleID?: number;
  roleName?: null | string;
  success?: boolean;
  traceIdentifier?: null | string;
}
