/**
 * @return `true` if code is running on a mobile or a tablet
 */
import { ActivatedRouteSnapshot, Params } from '@angular/router';
import { Md5 } from 'ts-md5';

export function isMobileOrTablet(): boolean {
  let check = false;
  // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: only-arrow-functions
  (function (a) {
    if (
      // tslint:disable-next-line: max-line-length
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      // tslint:disable-next-line: max-line-length
      // eslint-disable-next-line no-useless-escape
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    ) {
      check = true;
    }
  })(navigator.userAgent || navigator.vendor);
  return check;
}

/**
 * Generates a unique ID.
 * (c.f. http://stackoverflow.com/a/2117523/2440315)
 */
export function guid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // tslint:disable-next-line: one-variable-per-declaration
    // tslint:disable-next-line: no-bitwise
    const r = (Math.random() * 16) | 0;
    // tslint:disable-next-line: no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// I collect the params from the given router snapshot tree.
// --
// CAUTION: All params are merged into a single object. This means that like-named
// params in different tree nodes will collide and overwrite each other.
export const collectParams = (root: ActivatedRouteSnapshot): Params => {
  const params: Params = {};

  (function mergeParamsFromSnapshot(snapshot: ActivatedRouteSnapshot) {
    Object.assign(params, snapshot.params);

    snapshot.children.forEach(mergeParamsFromSnapshot);
  })(root);

  return params;
};

/**
 * @returns a URL of the gravatar image suitable to use a img src tag source.
 * @param email the email of the user
 * @param sizeInPixels  the size in pixel of the image requested
 */
export const getGravatarUrl = (email: string, sizeInPixels: number): string => {
  if (email) {
    const emailHashed = new Md5().appendStr(email).end();
    return `https://www.gravatar.com/avatar/${emailHashed}?s=${sizeInPixels}&d=retro`;
  } else {
    throw new TypeError('Email required');
  }
};

export const kebabize = (string: string): string => {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

export const camelize = (s: string) => s.replace(/-./g, (x) => x.toUpperCase()[1]);

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Remove special symbols and extra
 * spaces and replace with underscore using the replace method
 */
export const symbolize = (str: string): string => {
  return str.replace(/[^A-Z0-9]/gi, '_').toLowerCase();
};

export const validateUrl = (value: string): boolean => {
  if (
    value.includes('http://localhost') ||
    value.includes('http://127.0.0.1') ||
    value.includes('https://localhost') ||
    value.includes('https://127.0.0.1')
  ) {
    return true;
  }
  // tslint:disable-next-line: max-line-length
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
};

export const compareArrays = (arr1: string | any[], arr2: any[]): boolean => {
  if (!arr1 && !arr2) {
    return true;
  }

  if (!arr1 && arr2) {
    return false;
  }

  if (arr1 && !arr2) {
    return false;
  }

  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }
  let result;

  if (typeof arr1 !== "string") {
    arr1.forEach((e1: string | any[]) =>
      arr2.forEach((e2) => {
        if (e1.length > 1 && e2.length) {
          result = compareArrays(e1, e2);
        } else result = e1 === e2;
      })
    );
  }

  // @ts-ignore
  return result;
};

export const getUniqIDNotIncludedInList = (idList: number[]): number => {
  const max = 10000000;
  let id = Math.floor(Math.random() * max);
  while (idList.includes(id)) {
    id = Math.floor(Math.random() * max);
  }
  return id;
};

export const randomNumberBetweenRange = (a: number, b: number): number => {
  const diff = b - a;
  return Math.ceil(Math.random() * diff) + a;
};

export const randomNumber = (): number => {
  return randomNumberBetweenRange(1, 1000000000);
};
/**
 * Flatten the array given with a depth given in params.
 *
 * Credits: https://stackoverflow.com/questions/50993498/flat-is-not-a-function-whats-wrong
 * @param array
 * @param depth default is 1
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const flat = (array: any[], depth = 1) => {
  return array.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) && depth > 1 ? flat(toFlatten, depth - 1) : toFlatten
    );
  }, []);
};

/**
 *  Make sure p1 is containing all params of p2
 */
export const isContainingAllKeys = (p1: unknown, p2: unknown): boolean => {
  // @ts-ignore
  return Object.keys(p2).every((key) => {
    // @ts-ignore
    return p1[key] === p2[key];
  });
};

export const areObjectTheSame = (p1: unknown, p2: unknown): boolean => {
  return isContainingAllKeys(p1, p2) && isContainingAllKeys(p2, p1);
};

export const removeQueryParamsFromUrl = (url: string): string => {
  return url.split('?')[0];
};

/**
 * Copy a text to the clipboard
 * @param {*} text
 */
export const copyToClipboard = (text: string): void => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};

/**
 * Will make a name unique given a list of names by incrementing a number next to the name
 * while the name still exist
 */
export const makeNameUniqueDependingOnList = (name: string, list: string[]): string => {
  // to avoid infinite loops assert the length of the list is not too long
  if (list.length > 2000) {
    throw new Error('Too many names given in param');
  }
  let newName: string = name;
  let found = list.find((l) => newName.toLowerCase() === l.toLowerCase());
  if (!found) {
    return newName;
  }
  let count = 1;
  while (found) {
    newName = `${name}_${count}`;
    count += 1;
    found = list.find((l) => newName.toLowerCase() === l.toLowerCase());
  }
  return newName;
};

export function setBooleanIfDefined(state: boolean | undefined, defaultValue = false): boolean {
  return typeof state === 'boolean' ? state : defaultValue;
}

/**
 * Removes query params from an url and return it without it
 * @param url
 */
export const getPathFromUrl = (url: string): string => {
  return url.split('?')[0];
};

export const groupBy = (list: any[], keyGetter: (arg0: any) => any): Map<any, any> => {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = new (...args: any[]) => T;
