import { GizmoDataPerson, GizmoPerson } from './gizmo-person';
import { GIZMO_TYPE } from './gizmo-type';

export class GizmoInputAssignee extends GizmoPerson {
  override type = GIZMO_TYPE.ASSIGNEE;
  override bootstrapIconName = 'person-check';
}
export class GizmoValueAssignee extends GizmoDataPerson {}
