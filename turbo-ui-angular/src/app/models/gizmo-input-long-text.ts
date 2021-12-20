import { symbolize } from '@bamzooka/utils-general';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  McTextareaQuestion,
  McValidatorDescriptor,
  McValidatorType
} from '@bamzooka/ui-kit-dynamic-form';
import { GizmoInputSimpleQuestion } from './gizmo-input-simple-question';
import { GizmoInputConstructorOptions } from './gizmo-input';
import { GIZMO_TYPE } from './gizmo-type';

export interface GizmoInputLongTextConstructorOptions extends GizmoInputConstructorOptions<string> {
  placeholder?: string;
}

export class GizmoInputLongText extends GizmoInputSimpleQuestion<string> {
  override type = GIZMO_TYPE.LONG_TEXT_INPUT;
  override bootstrapIconName = 'text-indent-left';
  placeholder: string;
  // For now hardcoded
  maxLength: number;

  constructor(options: GizmoInputLongTextConstructorOptions) {
    super(options);
    this.placeholder = options.placeholder || '';
    this.maxLength = 65000;
  }

  deepCopy(): GizmoInputLongText {
    const clone = new GizmoInputLongText({});
    Object.assign(clone, this);
    return clone;
  }

  getAssociatedQuestion(): McTextareaQuestion {
    const question = {
      value: this.value,
      label: this.name,
      key: symbolize(this.name || ''),
      placeholder: this.placeholder || 'Your answer',
      help: this.help,
      validatorDescriptors: []
    } as unknown as McTextareaQuestion;

    // add max length validator if needed
    if (this.maxLength > 0) {
      // @ts-ignore
      question.validatorDescriptors.push({
        type: McValidatorType.MAX_LENGTH,
        param: `${this.maxLength}`
      } as McValidatorDescriptor);
    }
    return new McTextareaQuestion(question);
  }

  getGizmoNameDependingOnType(): string {
    return 'Input';
  }

  isNewValueValid(): boolean {
    return true;
  }

  // @ts-ignore
  getErrors(): string[] | null {
    if (super.getErrors()) {
      return super.getErrors();
    } else {
      if (this.is_required) {
        if (this.value?.trim()?.length === 0) {
          return ['Field is required'];
        }
      }
    }
  }

  override isRunEmpty(): boolean {
    // @ts-ignore
    return !(this.value?.trim()?.length > 0);
  }
}
