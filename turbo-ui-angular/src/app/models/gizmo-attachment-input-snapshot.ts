import { GIZMO_TYPE } from './gizmo-type';
import { GizmoAttachmentInput } from './gizmo-attachment-input';

export class GizmoAttachmentInputSnapshot extends GizmoAttachmentInput {
  override type = GIZMO_TYPE.SNAPSHOT_INPUT;
  override bootstrapIconName = 'camera';
}
