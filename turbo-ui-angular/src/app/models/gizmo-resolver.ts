/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Converts a json Gizmo to an actual Gizmo class depending
 * on its type
 * @param gizmoJSON the json representing the gizmo
 */
import { Gizmo, GizmoInterface } from './gizmo';
import { GIZMO_TYPE } from './gizmo-type';
import {
  GizmoColorStatus,
  GizmoColorStatusConstructorOptions,
  GizmoValueColorStatus
} from './gizmo-color-status';
import { GizmoPage, GizmoPageConstructorOptions } from './gizmo-page';
import {
  GizmoInputShortText,
  GizmoInputShortTextConstructorOptions,
  GizmoValueShortText
} from './gizmo-input-short-text';
import { GizmoInputLongText, GizmoInputLongTextConstructorOptions } from './gizmo-input-long-text';
import { GizmoText } from './gizmo-text';
import {
  GizmoDropdownOption,
  GizmoDropdownOptionConstructorOptions
} from './gizmo-dropdown-option';
import { GizmoDataDropdown, GizmoInputDropdown } from './gizmo-dropdown';
import { GizmoInputNumber, GizmoValueNumber } from './gizmo-input-number';
import { GizmoInputDate, GizmoValueDate } from './gizmo-input-date';
import { GizmoInputYesNo, YES_NO } from './gizmo-input-yes-no';
import { GizmoInputCheckbox } from './gizmo-input-checkbox';
import { GizmoAttachment, GizmoAttachmentConstructorOptions } from './gizmo-attachment';
import { GizmoAttachmentImage } from './gizmo-attachment-image';
import { GizmoVideo } from './gizmo-video';
import { GizmoUrl } from './gizmo-url';
import {
  GizmoAttachmentInput,
  GizmoAttachmentInputConstructorOptions
} from './gizmo-attachment-input';
import { GizmoAttachmentInputSnapshot } from './gizmo-attachment-input-snapshot';
import { GizmoAttachmentInputImage } from './gizmo-attachment-input-image';
import { GizmoTaskList, GizmoTaskListConstructorOptions } from './gizmo-task-list';
import { GizmoInput, GizmoInputConstructorOptions } from './gizmo-input';
import { GIZMO_DATA_TYPE, GizmoData, GizmoValueConstructorOptions } from './gizmo-data';
import { GizmoDataPerson, GizmoPerson, GizmoPersonConstructorOptions } from './gizmo-person';
import { GizmoWithValueConstructorOptions } from './gizmo-with-value';
import { GizmoInputAssignee, GizmoValueAssignee } from './gizmo-assignee-input';
import {LinkedColumnsConfigurationTypes} from "./linked-columns-configurations";

export const resolveGizmo = <T>(gizmoJSON: GizmoInterface): T => {
  let gizmo: Gizmo;
  switch (gizmoJSON.type) {
    /******************************* GIZMOS **************************************************/
    /******************************* GIZMOS **************************************************/
    /******************************* GIZMOS **************************************************/
    /******************************* GIZMOS **************************************************/
    case GIZMO_TYPE.PAGE:
      gizmo = new GizmoPage(gizmoJSON as GizmoPageConstructorOptions);
      break;
    case GIZMO_TYPE.COLOR_STATUS:
      gizmo = new GizmoColorStatus(gizmoJSON as GizmoColorStatusConstructorOptions);
      break;
    case GIZMO_TYPE.SHORT_TEXT_INPUT:
      gizmo = new GizmoInputShortText(gizmoJSON as GizmoInputShortTextConstructorOptions);
      break;
    case GIZMO_TYPE.LONG_TEXT_INPUT:
      gizmo = new GizmoInputLongText(gizmoJSON as GizmoInputLongTextConstructorOptions);
      break;
    case GIZMO_TYPE.TEXT:
      gizmo = new GizmoText(gizmoJSON as GizmoWithValueConstructorOptions<string>);
      break;
    case GIZMO_TYPE.DROPDOWN_OPTION:
      gizmo = new GizmoDropdownOption(gizmoJSON as GizmoDropdownOptionConstructorOptions);
      break;
    case GIZMO_TYPE.DROPDOWN:
      // @ts-ignore
      gizmo = new GizmoInputDropdown(gizmoJSON as GizmoInputConstructorOptions<string>);
      break;
    case GIZMO_TYPE.NUMBER_INPUT:
      gizmo = new GizmoInputNumber(gizmoJSON as GizmoInputConstructorOptions<number>);
      break;
    case GIZMO_TYPE.DATE_INPUT:
      gizmo = new GizmoInputDate(gizmoJSON as GizmoInputConstructorOptions<Date>);
      break;
    case GIZMO_TYPE.YES_NO_INPUT:
      gizmo = new GizmoInputYesNo(gizmoJSON as GizmoInputConstructorOptions<YES_NO>);
      break;
    case GIZMO_TYPE.CHECKBOX_INPUT:
      gizmo = new GizmoInputCheckbox(gizmoJSON as GizmoInputConstructorOptions<boolean>);
      break;
    case GIZMO_TYPE.DOWNLOAD:
      gizmo = new GizmoAttachment(gizmoJSON as GizmoAttachmentConstructorOptions);
      break;
    case GIZMO_TYPE.ATTACHMENT_IMAGE:
      gizmo = new GizmoAttachmentImage(gizmoJSON as GizmoAttachmentConstructorOptions);
      break;
    case GIZMO_TYPE.VIDEO:
      gizmo = new GizmoVideo(gizmoJSON as GizmoWithValueConstructorOptions<string>);
      break;
    case GIZMO_TYPE.URL:
      gizmo = new GizmoUrl(gizmoJSON as GizmoWithValueConstructorOptions<string>);
      break;
    case GIZMO_TYPE.UPLOAD_INPUT:
      gizmo = new GizmoAttachmentInput(gizmoJSON as GizmoAttachmentInputConstructorOptions);
      break;
    case GIZMO_TYPE.SNAPSHOT_INPUT:
      gizmo = new GizmoAttachmentInputSnapshot(gizmoJSON as GizmoAttachmentInputConstructorOptions);
      break;
    case GIZMO_TYPE.IMAGE_INPUT:
      gizmo = new GizmoAttachmentInputImage(gizmoJSON as GizmoAttachmentInputConstructorOptions);
      break;
    case GIZMO_TYPE.TASK_LIST:
      gizmo = new GizmoTaskList(gizmoJSON as GizmoTaskListConstructorOptions);
      break;
    case GIZMO_TYPE.PERSON:
      gizmo = new GizmoPerson(gizmoJSON as GizmoPersonConstructorOptions);
      break;
    case GIZMO_TYPE.ASSIGNEE:
      gizmo = new GizmoInputAssignee(gizmoJSON as GizmoPersonConstructorOptions);
      break;
    /******************************* Linked columns configuration *****************************/
    /******************************* Linked columns configuration *****************************/
    /******************************* Linked columns configuration *****************************/
    /******************************* Linked columns configuration *****************************/
    case LinkedColumnsConfigurationTypes.DUE_DATE:
      return gizmoJSON as any;
    default:
      throw new Error('Gizmo type not recognized ');
  }
  gizmo.gizmos = gizmo.gizmos.map((g) => {
    return resolveGizmo(g);
  });
  return gizmo as any;
};

export const resolveGizmoValue = (gizmoValueJson: GizmoValueConstructorOptions<any>): GizmoData<any> => {
  let gizmo: GizmoData<any>;
  switch (gizmoValueJson.type) {
    case GIZMO_DATA_TYPE.SHORT_TEXT_INPUT:
      gizmo = new GizmoValueShortText(gizmoValueJson);
      break;
    case GIZMO_DATA_TYPE.DATE_INPUT:
      gizmo = new GizmoValueDate(gizmoValueJson);
      break;
    case GIZMO_DATA_TYPE.COLOR_STATUS:
      gizmo = new GizmoValueColorStatus(gizmoValueJson);
      break;
    case GIZMO_DATA_TYPE.NUMBER_INPUT:
      gizmo = new GizmoValueNumber(gizmoValueJson);
      break;
    case GIZMO_DATA_TYPE.PERSON:
      gizmo = new GizmoDataPerson(gizmoValueJson);
      break;
    case GIZMO_DATA_TYPE.DROPDOWN:
      gizmo = new GizmoDataDropdown(gizmoValueJson);
      break;
    case GIZMO_DATA_TYPE.ASSIGNEE:
      gizmo = new GizmoValueAssignee(gizmoValueJson);
      break;
    default:
      throw new Error('Gizmo type not recognized');
  }
  return gizmo;
};

export const resolveGizmos = (gizmoJSONs: Gizmo[]): Gizmo[] => {
  return gizmoJSONs.map((gizmoJSON) => resolveGizmo(gizmoJSON));
};

export const sortGizmosByPosition = (gizmos: Gizmo[]): Gizmo[] => {
  // @ts-ignore
  return gizmos.sort((g1, g2) => g1.position - g2.position);
};

export const getGizmoInputs = (gizmos: Gizmo[]): GizmoInput<unknown>[] => {
  return gizmos.filter((g) => {
    return (g as GizmoInput<unknown>).isGizmoInput === true;
  }) as GizmoInput<unknown>[];
};
