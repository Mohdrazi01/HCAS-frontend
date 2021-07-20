/* tslint:disable */
import { RfqFile as SampleCubeRfqModelsRfqRfqFile } from '../../SampleCube/RFQ.Models.RFQ/rfq-file';
export interface RfqFileModel {
  createdBy?: number;
  createdOn?: string;
  fileBlob?: null | string;
  fileDescription?: null | string;
  fileExtention?: null | string;
  fileName?: null | string;
  rfQ_AttachmentId?: number;
  rfQ_Attachment_GUID?: string;
  rfqFiles?: null | Array<SampleCubeRfqModelsRfqRfqFile>;
}
