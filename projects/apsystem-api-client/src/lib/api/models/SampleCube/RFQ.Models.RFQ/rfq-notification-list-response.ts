/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { NotificationListItem as SampleCubeRfqModelsRfqNotificationListItem } from '../../SampleCube/RFQ.Models.RFQ/notification-list-item';
export interface RfqNotificationListResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsRfqNotificationListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
