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

export interface GizmoInputNumberConstructorOptions extends GizmoInputConstructorOptions<number> {
  placeholder?: string;
  max?: number;
}

export class GizmoInputNumber extends GizmoInputSimpleQuestion<number> {
  override type = GIZMO_TYPE.NUMBER_INPUT;
  override bootstrapIconName = 'sort-numeric-up-alt';
  placeholder: string;
  max: number | null;

  constructor(options: GizmoInputNumberConstructorOptions) {
    super(options);
    this.placeholder = options.placeholder || '';
    this.max = typeof options.max === 'number' ? options.max : null;
  }

  deepCopy(): GizmoInputNumber {
    const clone = new GizmoInputNumber({});
    Object.assign(clone, this);
    return clone;
  }

  getAssociatedQuestion(): McNumberQuestion {
    const question = {
      value: this.value,
      label: this.name,
      key: symbolize(this.name || ''),
      placeholder: this.placeholder || 'Type a number here',
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
