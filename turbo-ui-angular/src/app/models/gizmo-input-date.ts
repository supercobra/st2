import { DatePipe } from '@angular/common';
import { GizmoInput, GizmoInputConstructorOptions} from './gizmo-input';
import {GIZMO_TYPE} from './gizmo-type';
import {GizmoWithValueData} from './gizmo-with-value';
import {setBooleanIfDefined} from '@bamzooka/utils-general';
import {assert} from "../utils/shared-utils-assert";

export class GizmoInputDate extends GizmoInput<Date> {
  pipe = new DatePipe('en-US'); // TODO get the local of the app with i18N
  override type = GIZMO_TYPE.DATE_INPUT;
  override bootstrapIconName = 'calendar';

  // app variable
  isDone: boolean | undefined;

  constructor(options: GizmoInputConstructorOptions<any>) {
    super(options);
    if (options.value) {
      this.setValue(new Date(options.value));
    }
  }

  get date(): Date {
    // @ts-ignore
    return <Date>this.getData().value;
  }

  deepCopy(): GizmoInputDate {
    const clone = new GizmoInputDate({});
    Object.assign(clone, this);
    if (clone.value) {
      // @ts-ignore
      clone.setValue(new Date(this.value));
    }
    return clone;
  }

  canHaveBenchmarkCondition(): boolean {
    return true;
  }

  getGizmoNameDependingOnType(): string {
    return 'Date';
  }

  isNewValueValid(): boolean {
    return true;
  }

  override propagateData(data: { value: Date }) {
    if (data.value) {
      this.data.value = new Date(data.value);
    } else {
      this.data.value = null;
    }
  }

  getColorDependingOnDueDate(date: Date): string {
    assert(this.date, 'No due date');
    if (this.isDone) {
      return 'green';
    }
    return this.getColorDependingOnDueDate(this.date);
  }
}

export class GizmoValueDate extends GizmoWithValueData<Date> {
  constructor(options: { value: string | number | Date; }) {
    // @ts-ignore
    super(options);
    if (options.value) {
      this.value = new Date(options.value);
    }
  }
}
