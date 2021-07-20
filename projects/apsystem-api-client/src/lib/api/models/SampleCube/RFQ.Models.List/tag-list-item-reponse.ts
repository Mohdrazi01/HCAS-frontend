/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { TagItemReponse as SampleCubeRfqModelsListTagItemReponse } from '../../SampleCube/RFQ.Models.List/tag-item-reponse';
export interface TagListItemReponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsListTagItemReponse>;
  success?: boolean;
  traceIdentifier?: null | string;
}
