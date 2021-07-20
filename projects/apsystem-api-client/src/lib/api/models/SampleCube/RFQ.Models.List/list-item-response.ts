/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { ListItem as SampleCubeRfqModelsListListItem } from '../../SampleCube/RFQ.Models.List/list-item';
export interface ListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsListListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
