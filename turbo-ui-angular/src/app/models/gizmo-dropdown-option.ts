import { GizmoWithValue, GizmoWithValueConstructorOptions } from './gizmo-with-value';
import { GIZMO_TYPE } from './gizmo-type';

export const DROPDOWN_GIZMO_OPTION_VALUE_MAX_LENGTH = 100;

export interface GizmoDropdownOptionConstructorOptions
  extends GizmoWithValueConstructorOptions<string> {
  key?: string;
}

export class GizmoDropdownOption extends GizmoWithValue<string> {
  key: string;
  // Fill out all the gizmo attributes here
  override type = GIZMO_TYPE.DROPDOWN_OPTION;

  // App related variable
  editedWithEnterKey = false;

  constructor(options: GizmoDropdownOptionConstructorOptions) {
    super(options);
    this.setValue(options.value || '');
    this.key = options.key || '';
  }

  deepCopy(): GizmoDropdownOption {
    const clone = new GizmoDropdownOption({});
    Object.assign(clone, this);
    return clone;
  }

  isNewValueValid(newValue: string): boolean {
    return !(!newValue || newValue?.length === 0);
  }
}
