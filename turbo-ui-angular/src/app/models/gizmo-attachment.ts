import { Gizmo, GizmoConstructorOptions } from './gizmo';
import { GIZMO_TYPE } from './gizmo-type';

export interface GizmoAttachmentConstructorOptions extends GizmoConstructorOptions {
  file_size?: string;
  file_name?: string;
  service_url?: string;
}
export class GizmoAttachment extends Gizmo {
  file_size: string | undefined;
  file_name: string | undefined;
  service_url: string | undefined;
  override bootstrapIconName = 'cloud-download';
  override type = GIZMO_TYPE.DOWNLOAD;

  constructor(options: GizmoAttachmentConstructorOptions) {
    super(options);
    this.file_size = options.file_size;
    this.file_name = options.file_name;
    this.service_url = options.service_url;
  }

  deepCopy(): Gizmo {
    const clone = new GizmoAttachment({});
    Object.assign(clone, this);
    return clone;
  }
}
