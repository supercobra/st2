import { GIZMO_TYPE } from './gizmo-type';
import {User} from "./user";

export enum GIZMO_DATA_TYPE {
  SHORT_TEXT_INPUT = 'GizmoShortTextValue',
  LONG_TEXT_INPUT = 'GizmoLongTextValue',
  DATE_INPUT = 'GizmoDateValue',
  NUMBER_INPUT = 'GizmoNumberValue',
  COLOR_STATUS = 'GizmoGreenYellowRedStatusValue',
  PERSON = 'GizmoPersonValue',
  DROPDOWN = 'GizmoDropdownValue',
  ASSIGNEE = 'GizmoAssignmentValue'
}


export interface GizmoValueConstructorOptions<T> {
  value: T;
  id?: number;
  type: GIZMO_DATA_TYPE;
  template_origin_id?: number;
  card_id?: number;
}
export abstract class GizmoData<T> {
  id: number | undefined;
  template_origin_id: number | undefined;
  protected data: T | undefined;
  type: GIZMO_DATA_TYPE;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(options: GizmoValueConstructorOptions<any>) {
    this.id = options.id;
    this.template_origin_id = options.template_origin_id;
    this.type = options.type;
  }

  abstract toJSON(): unknown;

  getData(): T | undefined {
    return this.data;
  }

  setData(newData: T): void {
    this.data = newData;
  }
}

export const convertGizmoTypeToValueType = (type: GIZMO_TYPE): GIZMO_DATA_TYPE => {
  return type.replace('Input', 'Value') as GIZMO_DATA_TYPE;
};
