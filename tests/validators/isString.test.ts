import { describe, expect, it } from 'vitest';
import { isString } from '../../src/validators';

describe('Validators -> isString -> tests', () => {
	it('should return true if the value is a string', () => {
		expect(isString('hello')).toBe(true);
		expect(isString('')).toBe(true);
		expect(isString('123')).toBe(true);
	});

	it('should return false if the value is not a string', () => {
		expect(isString(123)).toBe(false);
		expect(isString(null)).toBe(false);
		expect(isString(undefined)).toBe(false);
		expect(isString({})).toBe(false);
		expect(isString([])).toBe(false);
		expect(isString(false)).toBe(false);
	});
});
