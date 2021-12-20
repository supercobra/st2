import { GizmoConstructorOptions } from './gizmo';
import { GIZMO_TYPE } from './gizmo-type';
import { GizmoInput } from './gizmo-input';
import { GizmoWithValueData } from './gizmo-with-value';
import {setBooleanIfDefined} from "../utils/shared-utils-general";
import { GizmoValueConstructorOptions } from './gizmo-data';

export enum COLOR_STATUS {
  GREEN = 1,
  YELLOW,
  RED
}

export interface GizmoColorStatusConstructorOptions extends GizmoConstructorOptions {
  // Fill out all the attributes for the constructor here
  value?: COLOR_STATUS;
  is_deadline_status?: boolean;
}

export class GizmoColorStatus extends GizmoInput<COLOR_STATUS> {
  // Fill out all the gizmo attributes here
  override type = GIZMO_TYPE.COLOR_STATUS;
  override bootstrapIconName = 'option';
  is_deadline_status: boolean;

  // @ts-ignore
  constructor(options: this) {
    super(options);
    if (options.value) {
      this.setValue(Math.round(options.value));
    } else {
      // @ts-ignore
      this.setValue(null);
    }
    this.is_deadline_status = setBooleanIfDefined(options.is_deadline_status);
  }

  override setData(newData: { value: COLOR_STATUS }) {
    if (newData.value) {
      this.data.value = Math.round(newData.value);
    } else {
      // @ts-ignore
      this.data.value = null;
    }
  }

  override propagateData(data: { value: COLOR_STATUS }) {
    if (data.value) {
      this.data.value = Math.round(data.value);
    } else {
      this.data.value = null;
    }
  }

  deepCopy(): GizmoColorStatus {
    return new GizmoColorStatus(this);
  }

  getGizmoNameDependingOnType(): string {
    return 'ColorStatus';
  }

  isNewValueValid(): boolean {
    return true;
  }

  isDone(): boolean {
    return this.value === COLOR_STATUS.GREEN;
  }
}

export class GizmoValueColorStatus extends GizmoWithValueData<number> {
  constructor(options: GizmoValueConstructorOptions<any>) {
    super(options);
    if (options.value) {
      this.value = Math.round(options.value);
    } else {
      this.value = null;
    }
  }
}
