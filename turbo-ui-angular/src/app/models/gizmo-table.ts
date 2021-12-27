// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  McNumberQuestion,
  McValidatorDescriptor,
  McValidatorType
} from '@bamzooka/ui-kit-dynamic-form';
import { symbolize } from '@bamzooka/utils-general';
import { GizmoInputConstructorOptions } from './gizmo-input';
import { GizmoInputSimpleQuestion } from './gizmo-input-simple-question';
import { GIZMO_TYPE } from './gizmo-type';
import { GizmoWithValueData } from './gizmo-with-value';

export interface GizmoTableConstructorOptions extends GizmoInputConstructorOptions<number> {
  placeholder?: string;
}

export class GizmoTable extends GizmoInputSimpleQuestion<number> {
  override type = GIZMO_TYPE.NUMBER_INPUT;
  override bootstrapIconName = 'sort-numeric-up-alt';
  placeholder: string;
  max: number | null;

  constructor(options: GizmoTableConstructorOptions) {
    super(options);
    this.placeholder = options.placeholder || '';
  }

  deepCopy(): GizmoTable {
    const clone = new GizmoTable({});
    Object.assign(clone, this);
    return clone;
  }

  getAssociatedQuestion(): McNumberQuestion {
    const question = {
      value: this.value,
      label: this.name,
      key: symbolize(this.name || ''),
      placeholder: this.placeholder || 'Name of the table',
      help: this.help,
      validatorDescriptors: []
    } as unknown as McNumberQuestion;

    // add max length validator if needed
    if (this.max && this.max > 0) {
      // @ts-ignore
      question.validatorDescriptors.push({
        type: McValidatorType.MAX_NUMBER,
        param: `${this.max}`
      } as McValidatorDescriptor);
    }
    return new McNumberQuestion(question);
  }

  getGizmoNameDependingOnType(): string {
    return 'Number';
  }

  isNewValueValid(): boolean {
    return true;
  }

  override isRunEmpty(): boolean {
    if (this.value === 0) {
      return false;
    } else {
      return super.isRunEmpty();
    }
  }
}

export class GizmoValueNumber extends GizmoWithValueData<number> {}
