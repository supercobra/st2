import { GizmoAttachment, GizmoAttachmentConstructorOptions } from './gizmo-attachment';
import { GIZMO_TYPE } from './gizmo-type';

export interface GizmoAttachmentInputConstructorOptions extends GizmoAttachmentConstructorOptions {
  is_required?: boolean;
  help?: string;
}

export class GizmoAttachmentInput extends GizmoAttachment {
  is_required: boolean;
  help: string | undefined;
  override type = GIZMO_TYPE.UPLOAD_INPUT;
  override bootstrapIconName = 'cloud-upload';

  constructor(options: GizmoAttachmentInputConstructorOptions) {
    super(options);
    this.is_required = typeof options.is_required === 'boolean' ? options.is_required : false;
    this.help = options.help;
  }
}
