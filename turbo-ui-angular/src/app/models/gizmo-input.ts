// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { McDropdownOption } from '@bamzooka/ui-kit-dynamic-form';
import { GizmoWithValue, GizmoWithValueConstructorOptions } from './gizmo-with-value';

export interface GizmoInputConstructorOptions<T> extends GizmoWithValueConstructorOptions<T> {
  is_required?: boolean;
  help?: string;
}

export abstract class GizmoInput<T> extends GizmoWithValue<T> {
  /**
   * Whereas the input is required or not
   */
  is_required: boolean;

  /**
   * A help text for the input
   */
  help: string | undefined;

  isGizmoInput = true;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(options: GizmoInputConstructorOptions<any>) {
    super(options);
    this.data.value = options.value;
    this.is_required = typeof options.is_required === 'boolean' ? options.is_required : false;
    this.help = options.help;
  }

  /**
   * Will return `Date` for gizmo date and `Input` for anything else
   */
  abstract getGizmoNameDependingOnType(): string;

  abstract override deepCopy(): GizmoInput<T>;

  getErrors(): string[] | null {
    if (this.is_required) {
      if (this.value === undefined || this.value === null) {
        return ['Field is required'];
      }
    }
    return null;
  }

  override isRunEmpty(): boolean {
    return !this.value;
  }
}
