// import { AssertionError } from 'assert';

/**
 * This is a set of function use for better programming.
 * They throw an error if something unexpected happened. They're called assertion
 * functions.
 */

/**
 * Says that whatever gets passed into the condition parameter must
 * be true. This assert must past for the rest of the scope to continue
 * execution
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    // throw new AssertionError({ message: msg });
    throw new Error(msg);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assertIsString(val: any): asserts val is string {
  if (typeof val !== 'string') {
    // throw new AssertionError({ message: 'Not a string!' });
    throw new Error('Not a string!');
  }
}
