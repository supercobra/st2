import { Gizmo, GizmoConstructorOptions } from './gizmo';
import { GIZMO_TYPE } from './gizmo-type';

export interface GizmoTaskListConstructorOptions extends GizmoConstructorOptions {
  is_all_tasks_required?: boolean;
}

export const MAX_NUMBER_OF_TASKS = 200;
export class GizmoTaskList extends Gizmo {
  is_all_tasks_required: boolean;
  override type = GIZMO_TYPE.TASK_LIST;
  override bootstrapIconName = 'list-check';
  constructor(options: GizmoTaskListConstructorOptions) {
    super(options);
    this.is_all_tasks_required =
      typeof options.is_all_tasks_required === 'boolean' ? options.is_all_tasks_required : false;
  }

  deepCopy(): GizmoTaskList {
    const clone = new GizmoTaskList({});
    Object.assign(clone, this);
    return clone;
  }
}
