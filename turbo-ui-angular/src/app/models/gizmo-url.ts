import { validateUrl } from '@bamzooka/utils-general';
import { GizmoWithValue, GizmoWithValueConstructorOptions } from './gizmo-with-value';
import { GIZMO_TYPE } from './gizmo-type';

export class GizmoUrl extends GizmoWithValue<string> {
  override type = GIZMO_TYPE.URL;
  override bootstrapIconName = 'link-45deg';

  constructor(options: GizmoWithValueConstructorOptions<string>) {
    super(options);
  }

  deepCopy(): GizmoUrl {
    const clone = new GizmoUrl({});
    Object.assign(clone, this);
    return clone;
  }

  isNewValueValid(newValue: string): boolean {
    if (!newValue || newValue.length === 0) {
      return true;
    }
    return validateUrl(newValue);
  }
}
