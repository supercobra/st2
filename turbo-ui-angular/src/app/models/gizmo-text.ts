import { GizmoWithValue, GizmoWithValueConstructorOptions } from './gizmo-with-value';
import { GIZMO_TYPE } from './gizmo-type';

export class GizmoText extends GizmoWithValue<string> {
  override type = GIZMO_TYPE.TEXT;
  override bootstrapIconName = 'cursor-text';

  // @ts-ignore
  constructor(options: this) {
    super(options);
    this.setValue(options.value || '');
  }

  deepCopy(): GizmoText {
    return new GizmoText(this);
  }

  override isRunEmpty(): boolean {
    return !this.value || this.value.length === 0;
  }

  override isEditEmpty(): boolean {
    return !this.value || this.value === '';
  }

  isNewValueValid(): boolean {
    return true;
  }
}
