import { GizmoAttachment, GizmoAttachmentConstructorOptions} from './gizmo-attachment';
import {GIZMO_TYPE} from './gizmo-type';

export class GizmoAttachmentImage extends GizmoAttachment {
  override type = GIZMO_TYPE.ATTACHMENT_IMAGE;
  override bootstrapIconName = 'image';

  constructor(options: GizmoAttachmentConstructorOptions) {
    super(options);
  }

  override deepCopy(): GizmoAttachmentImage {
    const clone = new GizmoAttachmentImage({});
    Object.assign(clone, this);
    return clone;
  }
}
