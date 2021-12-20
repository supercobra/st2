import { McDropdownQuestion } from '@bamzooka/ui-kit-dynamic-form';
import { symbolize } from '../utils/shared-utils-general';
import { GizmoDropdownOption } from './gizmo-dropdown-option';
import { GizmoInputSimpleQuestion } from './gizmo-input-simple-question';
import { GIZMO_TYPE } from './gizmo-type';
import { GizmoWithValueData } from './gizmo-with-value';
export const MAX_NUMBER_OF_DROPDOWN_OPTIONS = 200;

const CLEAR_OPTION_KEY = 'null';
const CLEAR_OPTION_VALUE = 'Choose...';
export const CLEAR_DROPDOWN_OPTION: GizmoDropdownOption = {
  key: CLEAR_OPTION_KEY,
  value: CLEAR_OPTION_VALUE
} as GizmoDropdownOption;

export class GizmoInputDropdown extends GizmoInputSimpleQuestion<string> {
  override type = GIZMO_TYPE.DROPDOWN;
  override canHaveLogicForNextSection = true;
  override bootstrapIconName = 'list-task';
  // @ts-ignore
  override gizmos: GizmoDropdownOption[] | undefined;

  // @ts-ignore
  deepCopy(): GizmoInputDropdown {
    const clone = new GizmoInputDropdown({});
    Object.assign(clone, this);
    // @ts-ignore
    clone.gizmos = this.gizmos.map((o) => {
      // @ts-ignore
      return new GizmoDropdownOption(o);
    });
    return clone;
  }

  getGizmoNameDependingOnType(): string {
    return 'Dropdown';
  }

  isNewValueValid(): boolean {
    return true;
  }

  getAssociatedQuestion(): McDropdownQuestion {
    return new McDropdownQuestion({
      value: this.value ? this.value : CLEAR_DROPDOWN_OPTION.key,
      label: this.name,
      key: symbolize(this.name || ''),
      // @ts-ignore
      options: this.gizmos.map((o) => {
        return { key: o.key, value: o.value };
      })
    });
  }
}

export class GizmoDataDropdown extends GizmoWithValueData<string> {}
