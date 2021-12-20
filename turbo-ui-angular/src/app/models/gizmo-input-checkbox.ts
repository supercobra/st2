// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { McCheckboxQuestion } from '@bamzooka/ui-kit-dynamic-form';
import { symbolize } from '@bamzooka/utils-general';
import { GizmoInputSimpleQuestion } from './gizmo-input-simple-question';
import { GIZMO_TYPE } from './gizmo-type';
import { GizmoInputConstructorOptions } from './gizmo-input';

export class GizmoInputCheckbox extends GizmoInputSimpleQuestion<boolean> {
  override type = GIZMO_TYPE.CHECKBOX_INPUT;
  override bootstrapIconName = 'check-square';

  constructor(options: GizmoInputConstructorOptions<boolean>) {
    super(options);
  }

  deepCopy(): GizmoInputCheckbox {
    const clone = new GizmoInputCheckbox({});
    Object.assign(clone, this);
    return clone;
  }

  getAssociatedQuestion(): McCheckboxQuestion {
    const question = {
      value: this.value,
      label: this.name,
      key: symbolize(this.name || ''),
      help: this.help,
      validatorDescriptors: []
    } as unknown as McCheckboxQuestion;

    return new McCheckboxQuestion(question);
  }

  getGizmoNameDependingOnType(): string {
    return 'Checkbox';
  }

  isNewValueValid(): boolean {
    return true;
  }
}
