import { GizmoAttachmentInput } from './gizmo-attachment-input';
import { GIZMO_TYPE } from './gizmo-type';

export class GizmoAttachmentInputImage extends GizmoAttachmentInput {
  override type = GIZMO_TYPE.IMAGE_INPUT;
  override bootstrapIconName = 'file-image';
}
