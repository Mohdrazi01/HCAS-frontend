export class BaseResponse {
appError?:AppError;
traceIdentifier:string;
success:boolean;
}

export interface AppError
  {
    code?: null | string;
    description?: null | string;
    message?: null | string;

  }

