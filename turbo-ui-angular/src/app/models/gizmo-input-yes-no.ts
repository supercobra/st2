// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { McDropdownOption } from '@bamzooka/ui-kit-dynamic-form';
import { GizmoInput } from './gizmo-input';
import { GIZMO_TYPE } from './gizmo-type';

export enum YES_NO {
  YES = 'yes',
  NO = 'no'
}

export class GizmoInputYesNo extends GizmoInput<YES_NO> {
  override type = GIZMO_TYPE.YES_NO_INPUT;
  override bootstrapIconName = 'circle-half';

  deepCopy(): GizmoInputYesNo {
    const clone = new GizmoInputYesNo({});
    Object.assign(clone, this);
    return clone;
  }

  isNewValueValid(): boolean {
    return true;
  }

  getGizmoNameDependingOnType(): string {
    return 'Answer';
  }

  getBenchmarkValue1DropDownOptions(): McDropdownOption[] {
    return [
      {
        key: 'yes',
        value: 'Yes answer set to pass, no to fail'
      },
      {
        key: 'no',
        value: 'No answer set to pass, yes to fail'
      }
    ];
  }
}
