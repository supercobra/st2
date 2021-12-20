import { GizmoConstructorOptions } from './gizmo';
import { GIZMO_TYPE } from './gizmo-type';
import { GizmoData, GizmoValueConstructorOptions} from './gizmo-data';
import {User} from './user';
import {GizmoWithData} from './gizmo-with-data';

export interface GizmoPersonConstructorOptions extends GizmoConstructorOptions {
  user_id?: number;
  user?: User;
}

export class GizmoPerson extends GizmoWithData<{ user_id: number; user: User }> {
  override type = GIZMO_TYPE.PERSON;
  override bootstrapIconName = 'person';

  constructor(options: GizmoPersonConstructorOptions) {
    super(options);
    // @ts-ignore
    this.data = {user_id: options.user_id || null, user: options.user || null};
  }

  deepCopy(): GizmoWithData<{ user_id: number; user: User }> {
    const clone = new GizmoPerson({});
    Object.assign(clone, this);
    return clone;
  }

  propagateData(data: { user_id: number; user: User }) {
    this.data.user_id = data.user_id;
    this.data.user = data.user;
  }

  override toJSON(): GizmoPersonConstructorOptions {
    const json = super.toJSON() as GizmoPersonConstructorOptions;
    json.user_id = this.data.user_id;
    return json;
  }

  getData(): { user_id: number; user: User } {
    return this.data;
  }

  setData(newData: { user_id: number; user: User }) {
    // @ts-ignore
    this.data = {user_id: newData.user_id || null, user: newData.user || null};
  }

  override isRunEmpty(): boolean {
    return !this.getData().user_id;
  }
}

export class GizmoDataPerson extends GizmoData<{ user_id: number; user: User }> {
  user_id: number = 0;

  constructor(options: GizmoValueConstructorOptions<any>) {
    super(options);
    this.data = { user_id: options.user_id, user: options.user };
  }

  toJSON(): unknown {
    const gizmoJSON = {
      ...this
    };
    // @ts-ignore
    gizmoJSON.user_id = this.data.user_id || null;
    delete gizmoJSON.data;
    return gizmoJSON;
  }
}
