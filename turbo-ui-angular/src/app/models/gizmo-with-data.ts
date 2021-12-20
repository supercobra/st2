import { Gizmo } from './gizmo';
import {User} from "./user";

export abstract class GizmoWithData<T> extends Gizmo {
  // @ts-ignore
  protected data: T;

  abstract propagateData(data: T): void;

  abstract override deepCopy(): GizmoWithData<T>;

  abstract getData(): { user_id: number; user: User };

  abstract setData(newData: T): void;
}
