import { GizmoConstructorOptions } from './gizmo';
import { GizmoWithData } from './gizmo-with-data';
import { GizmoData, GizmoValueConstructorOptions} from './gizmo-data';
import {User} from "./user";

export interface GizmoWithValueConstructorOptions<T> extends GizmoConstructorOptions {
  value?: T;
}

export abstract class GizmoWithValue<T> extends GizmoWithData<{ value: T | undefined | null }> {
  abstract isNewValueValid(newValue: T): boolean;

  protected constructor(options: GizmoWithValueConstructorOptions<T>) {
    super(options);
    this.data = {value: options.value};
  }

  get value(): T | undefined | null {
    return this.data.value;
  }

  // @ts-ignore
  abstract override deepCopy(): GizmoWithValue<T>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  override isEqual(gizmo: GizmoWithValue<any>): boolean {
    return super.isEqual(gizmo) && gizmo.value === this.value;
  }

  override toJSON(): GizmoWithData<{ value: T }> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const json = super.toJSON() as any;
    json.value = this.data.value;
    return json;
  }

  setValue(value: T): void {
    this.data.value = value;
  }

  // @ts-ignore
  getData(): T {
    // @ts-ignore
    return this.data;
  }

  setData(newData: { value: T }) {
    this.data.value = newData.value;
  }

  propagateData(data: { value: T }) {
    this.data.value = data.value;
  }
}

export class GizmoWithValueData<T> extends GizmoData<{ value: T }> {
  value: T | undefined | null;

  constructor(options: GizmoValueConstructorOptions<any>) {
    super(options);
    this.data = { value: options.value };
  }
  toJSON(): unknown {
    const gizmoJSON = {
      ...this
    };
    // @ts-ignore
    gizmoJSON.value = this.data.value;
    // @ts-ignore
    delete gizmoJSON.data;
    return gizmoJSON;
  }
}
