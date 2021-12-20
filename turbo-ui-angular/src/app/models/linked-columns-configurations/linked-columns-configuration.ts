import { LinkedColumnsConfigurationTypes } from './linked-columns-configuration-types';
import {GizmoInterface} from "../gizmo";

export class LinkedColumnsConfiguration implements GizmoInterface {
  id: number;
  gizmo_id: number ;
  type!: LinkedColumnsConfigurationTypes;

  constructor(id: number, gizmo_id: number) {
    this.id = 0;
    this.gizmo_id = 0;
  }
}
