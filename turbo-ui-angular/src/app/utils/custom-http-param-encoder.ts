import { HttpParameterCodec } from '@angular/common/http';
/**
 *  This class is used to overwrite default Angular HttpParam encoder
 *  In some places in the app we send emails E.g ahmed+test@bamzooka.com
 *  The + becomes a space character with the default HttpParam encoder
 */
// tslint:disable-next-line: max-line-length
// https://medium.com/better-programming/how-to-fix-angular-httpclient-not-escaping-url-parameters-ddce3f9b8746
export class CustomHttpParamEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }
  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }
  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }
  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}
