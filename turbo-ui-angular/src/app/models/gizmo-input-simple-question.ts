// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { McQuestionBase } from '@bamzooka/ui-kit-dynamic-form';
import { symbolize } from '@bamzooka/utils-general';
import { GizmoInput } from './gizmo-input';

/**
 * This method represents a Gizmo that can be converted easily to a simple
 * question of type DROPDOWN, TEXT, TEXT AREA ...
 */
export abstract class GizmoInputSimpleQuestion<T> extends GizmoInput<T> {
  /**
   * Needs to be implemented to return the associated QuestionBase
   */
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  abstract getAssociatedQuestion(): McQuestionBase<any>;

  getQuestionKey(): string {
    return symbolize(this.name);
  }
}
