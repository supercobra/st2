import {GIZMO_TYPE} from './gizmo-type';
import {Subject} from 'rxjs';
import {GIZMO_DATA_TYPE} from './gizmo-data';
import {setBooleanIfDefined} from "../utils/shared-utils-general";
import {LinkedColumnsConfigurationTypes} from "./linked-columns-configurations";

export interface GizmoInterface {
  id?: number | null;
  gizmo_id?: number | null;
  type?: GIZMO_TYPE | GIZMO_DATA_TYPE | LinkedColumnsConfigurationTypes;

}

export interface GizmoConstructorOptions extends GizmoInterface {
  id?: number;
  gizmo_id?: number;
  name?: string;
  type?: GIZMO_TYPE;
  position?: number;
  gizmos?: Gizmo[];
  is_hidden?: boolean;
  bootstrapIconName?: string;
}

export abstract class Gizmo implements GizmoInterface {
  id: number;
  /**
   * The id of the parent if gizmo has a parent
   */
  gizmo_id: number;
  /**
   * All gizmos have 1 name
   */
  name: string;
  /**
   * The type of the gizmo. This is crucial. This is what will determine what child model
   * to use when receiving the gizmos from backend
   */
  type: GIZMO_TYPE | undefined;
  /**
   * Used to determine the position of the gizmo
   */
  position: number | undefined;
  /**
   * If gizmo has children, this variable will be populated with the children
   */
  gizmos: Gizmo[];

  /**
   * The gizmo from where it cloned
   */
  template_origin_id: number | undefined;
  is_hidden: boolean;

  /**
   * TODO (AL) comment
   */
  logic_next_section_local_id: string | undefined;

  // Attributes for client only
  bootstrapIconName: string | null;
  canHaveLogicForNextSection: boolean | undefined;
  isProcessing: boolean | undefined;
  childAdded$ = new Subject<Gizmo>();

  protected constructor(options: GizmoConstructorOptions) {
    this.id = options.id || 0;
    this.gizmo_id = options.gizmo_id || 0;
    this.name = options.name || '';
    this.type = options.type;
    this.gizmos = options.gizmos || [];
    this.position = options.position;
    this.is_hidden = setBooleanIfDefined(options.is_hidden);

    // Attributes for client only
    this.bootstrapIconName = options.bootstrapIconName || null;
  }

  /**
   * Returns the list of gizmos that his gizmos can have as
   * children.
   * Overwrite this method to blacklist/whitelist them
   * @protected
   */
  getPossibleGizmoChildren(): Gizmo[] {
    return [];
  }

  /**
   * Return the client route url
   */
  getClientRouteUrl(): string {
    return `/gizmos/${this.id}`;
  }

  setParent(parentId: number): void {
    this.gizmo_id = parentId;
  }

  /**
   * Implement this method to tell if the gizmo is empty in edit mode
   */
  isEditEmpty(): boolean {
    return !this.name || this.name.trim().length === 0;
  }

  isRunEmpty(): boolean {
    return false;
  }

  /**
   * Copy the values from the model in the current object
   * @param model
   */
  copyProperties(model: Gizmo): void {
    for (const attr in model) {
      if (Object.prototype.hasOwnProperty.call(this, attr)) {
        // @ts-ignore
        this[attr] = model[attr];
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): any {
    const gizmoJSON = {
      ...this
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
    // delete unnecessary data
    delete gizmoJSON.childAdded$;
    delete gizmoJSON.id;
    delete gizmoJSON.bootstrapIconName;
    if (this.gizmos?.length > 0) {
      gizmoJSON.gizmos_attributes = this.gizmos.map((g) => g.toJSON());
    }
    return gizmoJSON;
  }

  isEqual(gizmo: Gizmo): boolean {
    return (
      gizmo.type === this.type &&
      gizmo.name === this.name &&
      gizmo.position === this.position &&
      gizmo.gizmo_id === this.gizmo_id
    );
  }

  /**
   * Implement the deep copy of the gizmo for each gizmo
   */
  abstract deepCopy(): Gizmo;
}

// @ts-ignore
/**
 * Deep search into the gizmo tree to find the gizmo.
 * Will search recursively
 * @param gizmoId
 * @param gizmos
 */
export const findGizmoInTree = (gizmoId: number, gizmos: Gizmo[]): Gizmo | null => {
  if (!gizmos) {
    return null;
  }

  for (let i = 0; i < gizmos.length; i++) {
    if (gizmos[i].id === gizmoId) {
      return gizmos[i];
    }
    const found = findGizmoInTree(gizmoId, gizmos[i].gizmos);
    if (found) {
      return found;
    }
  }
  return null;
};
