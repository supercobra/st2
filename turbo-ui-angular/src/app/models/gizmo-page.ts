import { GizmoText } from './gizmo-text';
import { Gizmo, GizmoConstructorOptions } from './gizmo';
import { GIZMO_TYPE } from './gizmo-type';

const possibleChildren = [new GizmoText({})];
export interface GizmoPageConstructorOptions extends GizmoConstructorOptions {
  // Fill out all the attributes for the constructor here
  name?: string;
}

export class GizmoPage extends Gizmo {
  override name: string;
  // Fill out all the gizmo attributes here
  override type = GIZMO_TYPE.PAGE;
  override bootstrapIconName = 'file-post';

  constructor(options: GizmoPageConstructorOptions) {
    super(options);
    this.name = options.name || '';
  }

  override getPossibleGizmoChildren(): Gizmo[] {
    return possibleChildren;
  }

  deepCopy(): GizmoPage {
    return new GizmoPage(this);
  }
}
