import { describe, expect, it } from 'vitest';
import { isUndefined } from '../../src/validators';

describe('Validators -> isUndefined -> tests', () => {
	it('should return true if the value is undefined', () => {
		expect(isUndefined(undefined)).toBe(true);

		let not;
		expect(isUndefined(not)).toBe(true);
	});

	it('should return false if the value is not undefined', () => {
		expect(isUndefined(null)).toBe(false);
		expect(isUndefined(0)).toBe(false);
		expect(isUndefined('')).toBe(false);
		expect(isUndefined({})).toBe(false);
		expect(isUndefined([])).toBe(false);
		expect(isUndefined(false)).toBe(false);
	});
});
