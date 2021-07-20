/* tslint:disable */
import { RfqProposalVersonRequest as SampleCubeRfqModelsRfqRfqProposalVersonRequest } from '../../SampleCube/RFQ.Models.RFQ/rfq-proposal-verson-request';
export interface PurposalFileModel {
  createdBy?: number;
  createdOn?: string;
  fileBlob?: null | string;
  fileDescription?: null | string;
  fileExtention?: null | string;
  fileName?: null | string;
  rFQ_Purposal_Version?: null | Array<SampleCubeRfqModelsRfqRfqProposalVersonRequest>;
  rfQ_AttachmentId?: number;
  rfQ_Attachment_GUID?: string;
  uploadByName?: null | string;
}
