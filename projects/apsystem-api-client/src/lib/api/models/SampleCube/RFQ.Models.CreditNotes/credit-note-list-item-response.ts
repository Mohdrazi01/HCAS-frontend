/* tslint:disable */
import { AppError as SampleCubeRfqModelsAppError } from '../../SampleCube/RFQ.Models/app-error';
import { CreditNoteListItem as SampleCubeRfqModelsCreditNotesCreditNoteListItem } from '../../SampleCube/RFQ.Models.CreditNotes/credit-note-list-item';
export interface CreditNoteListItemResponse {
  appError?: SampleCubeRfqModelsAppError;
  count?: number;
  items?: null | Array<SampleCubeRfqModelsCreditNotesCreditNoteListItem>;
  success?: boolean;
  traceIdentifier?: null | string;
}
