import { symbolize } from '@bamzooka/utils-general';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  McTextboxQuestion,
  McValidatorDescriptor,
  McValidatorType
} from '@bamzooka/ui-kit-dynamic-form';
import { GizmoInputSimpleQuestion } from './gizmo-input-simple-question';
import { GizmoInputConstructorOptions } from './gizmo-input';
import { GIZMO_TYPE } from './gizmo-type';
import { GizmoWithValueData } from './gizmo-with-value';

export interface GizmoInputShortTextConstructorOptions
  extends GizmoInputConstructorOptions<string> {
  placeholder?: string;
}

export class GizmoInputShortText extends GizmoInputSimpleQuestion<string> {
  override type = GIZMO_TYPE.SHORT_TEXT_INPUT;
  override bootstrapIconName = 'input-cursor-text';
  placeholder: string;
  // For now hardcoded
  maxLength: number;

  constructor(options: GizmoInputShortTextConstructorOptions) {
    super(options);
    this.placeholder = options.placeholder || '';
    this.maxLength = 255;
  }

  deepCopy(): GizmoInputShortText {
    const clone = new GizmoInputShortText({});
    Object.assign(clone, this);
    return clone;
  }

  getAssociatedQuestion(): McTextboxQuestion {
    const question = {
      value: this.value,
      label: this.name,
      key: symbolize(this.name || ''),
      placeholder: this.placeholder || 'Your answer',
      help: this.help,
      validatorDescriptors: []
    } as unknown as McTextboxQuestion;

    // add max length validator if needed
    if (this.maxLength > 0) {
      // @ts-ignore
      question.validatorDescriptors.push({
        type: McValidatorType.MAX_LENGTH,
        param: `${this.maxLength}`
      } as McValidatorDescriptor);
    }
    return new McTextboxQuestion(question);
  }

  getGizmoNameDependingOnType(): string {
    return 'Input';
  }

  isNewValueValid(): boolean {
    return true;
  }

  override getErrors(): string[] | null {
    if (super.getErrors()) {
      return super.getErrors();
    } else {
      if (this.is_required) {
        if (this.value?.trim()?.length === 0) {
          return ['Field is required'];
        }
      }
    }
    return null;
  }

  override isRunEmpty(): boolean {
    // @ts-ignore
    return !(this.value?.trim()?.length > 0);
  }
}

export class GizmoValueShortText extends GizmoWithValueData<string> {}
