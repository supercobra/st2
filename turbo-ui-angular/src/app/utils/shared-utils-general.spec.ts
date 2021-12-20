import { areObjectTheSame } from './shared-utils-general';

describe('shared-utils-general', () => {
  describe('areObjectTheSame', () => {
    it('should return true with 2 empty objects', () => {
      expect(areObjectTheSame({}, {})).toBe(true);
    });
  });
});
