/* tslint:disable */
import { AppError } from '../../app-error';
export interface UserDetailsResponse {
  address?: null | string;
  appError?: AppError;
  dateOfBirth?: string;
  email?: null | string;
  emailActivationCode?: null | string;
  experience?: null | string;
  gender?: number;
  genderName?: null | string;
  gmcNumber?: null | number;
  isEmailConfirmed?: boolean;
  isUserCreated?: boolean;
  isUserNameExist?: boolean;
  name?: null | string;
  password?: null | string;
  phoneNumber?: null | string;
  roleID?: number;
  roleName?: null | string;
  speciality?: null | string;
  success?: boolean;
  traceIdentifier?: null | string;
  userID?: null | number;
  userName?: null | string;
}
