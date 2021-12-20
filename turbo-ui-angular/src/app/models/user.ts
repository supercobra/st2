import { Validators } from '@angular/forms';

export const MAX_USER_NAME_LENGTH = 50;
export const MAX_USER_EMAIL_LENGTH = 50;
export const MAX_USER_USERNAME_LENGTH = 100;
export const MIN_USER_USERNAME_LENGTH = 3;

export enum USER_PICTURE_TYPE {
  GRAVATAR = 'gravatar',
  INITIALS = 'initials',
  UPLOADED = 'uploaded'
}

export enum STAFF_ROLES {
  STAFF_READER = 20,
  STAFF_SUPPORT = 30,
  STAFF_ACCOUNT_MANAGER = 35,
  STAFF_ADMIN = 40,
  STAFF_SUPER_ADMIN = 50
}

export enum LOCALE {
  EN = 'en',
  FR = 'fr'
  // ES = 'es',
  // DE = 'de',
  // PT = 'pt',
  // PL = 'pl',
  // TR = 'tr',
}

export function getLocaleOptions(): { key: string; value: string }[] {
  return [
    { key: '', value: 'Browser default' },
    { key: 'fr', value: 'Français' },
    { key: 'en', value: 'English' }
    // { key: 'de', value: 'Deutsch' },
    // { key: 'es', value: 'Español' },
    // { key: 'pl', value: 'Polski' },
    // { key: 'pt', value: 'Português' },
    // { key: 'tr', value: 'Türkçe' },
  ];
}

export class User {
  id: number = 0;
  email: string = '';
  name: string = '';
  username: string = '';
  password: string = '';
  'seen_at': Date;
  'picture_type': USER_PICTURE_TYPE;
  'staff_role': STAFF_ROLES;
  // @ts-ignore
  locale: LOCALE;

  constructor(options = {}) {
    Object.assign(this, options);
  }

  /**
   * Return true if user given in params can do the role given in params
   */
  static canDo(user: User, role: STAFF_ROLES): boolean {
    return user.staff_role >= role;
  }

  static isStaff(user: User): boolean {
    return User.canDo(user, STAFF_ROLES.STAFF_ACCOUNT_MANAGER);
  }

  static isStaffSuperAdmin(user: User): boolean {
    return User.canDo(user, STAFF_ROLES.STAFF_SUPER_ADMIN);
  }

  isStaffSuperAdmin(): boolean {
    return User.canDo(this, STAFF_ROLES.STAFF_SUPER_ADMIN);
  }
}

export const getUsernameStaticValidators = () => {
  const usernameRegExp = /^(\w|\.)+$/;
  return [
    Validators.minLength(MIN_USER_USERNAME_LENGTH),
    Validators.maxLength(MAX_USER_USERNAME_LENGTH),
    Validators.pattern(usernameRegExp)
  ];
};
