import { GizmoPage } from './gizmo-page';
import { GizmoText } from './gizmo-text';
import { GizmoColorStatus } from './gizmo-color-status';
import { GizmoInputShortText } from './gizmo-input-short-text';
import { GizmoInputLongText } from './gizmo-input-long-text';
import { GizmoInputNumber } from './gizmo-input-number';
import { GizmoInputDate } from './gizmo-input-date';
import { GizmoDropdownOption } from './gizmo-dropdown-option';
import { GizmoInputDropdown } from './gizmo-dropdown';
import { GizmoInputYesNo } from './gizmo-input-yes-no';
import { GizmoAttachmentImage } from './gizmo-attachment-image';

const gizmoPage = new GizmoPage({});
const gizmoText = new GizmoText({});
const gizmoColorStatus = new GizmoColorStatus({});
const gizmoInputShortText = new GizmoInputShortText({});
const gizmoInputLongText = new GizmoInputLongText({});
const gizmoInputNumber = new GizmoInputNumber({});
const gizmoInputDate = new GizmoInputDate({});
const gizmoDropdownOption1 = new GizmoDropdownOption({ key: 'hello', value: 'hello' });
const gizmoDropdown = new GizmoInputDropdown({
  gizmos: [gizmoDropdownOption1]
});
const gizmoInputYesNo = new GizmoInputYesNo({});
const gizmoAttachmentImage = new GizmoAttachmentImage({});

export const allGizmos = [
  gizmoPage,
  gizmoText,
  gizmoColorStatus,
  gizmoInputShortText,
  gizmoInputNumber,
  gizmoInputLongText,
  gizmoInputDate,
  gizmoDropdown,
  gizmoInputYesNo,
  gizmoAttachmentImage
];
